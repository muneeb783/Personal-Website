export default function Resume() {
    return (
      <section className="mb-5">
        <h2 className="border-bottom pb-2 mb-4">Resume</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Experience</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h4>Web Developer at XYZ Company</h4>
                <p className="text-muted">January 2020 - Present</p>
                <p>Developed and maintained web applications using React and Node.js.</p>
              </li>
              {/* Add more experience items here */}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Education</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h4>BS in Computer Science</h4>
                <p className="text-muted">Georgia Institute of Technology, Expected Graduation: May 2026</p>
              </li>
              {/* Add more education items here */}
            </ul>
          </div>
        </div>
      </section>
    )
  }