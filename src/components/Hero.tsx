import { Github } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">Hey there! My name is</h2>
        <h1 className="hero-title">
          Muneeb Ali Asif<span className="period">.</span>
        </h1>
        <div className="hero-description">
          <p>I am a Computer Science student @ Georgia Tech!</p>
          <p>I also have my own AI agent (In progress).</p>
        </div>
        <a href="https://github.com/muneeb783" className="github-button" target="_blank" rel="noopener noreferrer">
        <Github size={18} />
          My GitHub
        </a>
      </div>
    </section>
  )
}
