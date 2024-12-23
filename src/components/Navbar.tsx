import './Navbar.css';

export default function Navbar() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a className="nave" onClick={() => handleScroll('about')}>About</a>
        <a className="nave" onClick={() => handleScroll('projects')}>Projects</a>
        <a className="nave" onClick={() => handleScroll('toolbox')}>Toolbox</a>
        <a className="nave" onClick={() => handleScroll('sayhi')}>Say Hi</a>
        <a className="nave" onClick={() => handleScroll('devlogs')}>SHHHH</a>
      </div>
    </nav>
  );
}