const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// OpenAI API setup
const openai = new OpenAI({
  apiKey: "defkey"
});

// Initialize variables
let userResponses = [];
let currentScore = 50;

// **Route 1: Generate a dynamic question**
app.post("/generate-question", async (req, res) => {
  const { previousAnswers } = req.body;
  const personalityFocus = currentScore > 50 ? "diversity" : "core traits";

  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `
        Based on the following user's answers: ${JSON.stringify(previousAnswers)}, 
        generate a new personality-related question focused on ${personalityFocus}.
      `,
      max_tokens: 50,
    });

    const question = response.choices[0].text.trim();
    res.json({ question });
  } catch (error) {
    console.error("Error generating question:", error.message);
    res.status(500).json({ error: "Failed to generate question. Please try again later." });
  }
});

// **Route 2: Submit an answer and calculate the score**
app.post("/submit-answer", (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required." });
  }

  // Save the user's response
  userResponses.push({ question, answer });

  // Analyze the response
  if (answer.toLowerCase().includes("yes")) {
    currentScore += 10;
  } else if (answer.toLowerCase().includes("no")) {
    currentScore -= 5;
  } else {
    currentScore += 0; // Neutral response
  }

  // Ensure score stays within 1 to 100 range
  currentScore = Math.min(Math.max(currentScore, 1), 100);

  res.json({ score: currentScore });
});

// **Route 3: Reset session**
app.post("/reset", (req, res) => {
  userResponses = [];
  currentScore = 50;
  res.json({ message: "Session reset successfully." });
});

// **Start the server**
const startServer = (port) => {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
    .on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying with port ${port + 1}`);
        startServer(port + 1);
      } else {
        console.error(e);
      }
    });
};

const PORT = process.env.PORT || 5000;
startServer(PORT);