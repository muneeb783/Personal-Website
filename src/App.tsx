import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Acheivements";
import Toolbox from "./components/Toolbox";
import Sayhi from "./components/Sayhi";
import "./App.css";

function App() {
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend when the app loads
    const fetchServerData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/message"); // Make sure your backend route matches this
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error("Error fetching data from server:", error);
        setServerMessage("Could not connect to the server.");
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="app">
      <section id="home">
        <Navbar />
      </section>
      <main>
        <section id="home">
          <Hero />
        </section>
      </main>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Achievements />
      </section>
      <section id="toolbox">
        <Toolbox />
      </section>
      <section id="sayhi">
        <Sayhi />
        {/* Display message fetched from the server */}
        <div className="server-message">
          <p>Message from server: {serverMessage}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;