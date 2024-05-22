import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="image">
        <img className="img" src="photo.jpeg" alt="" />
      </div>
      <div className="summery">
        <p className="p-tag">Hello, my name is</p>
        <h1 className="name">Ahmadzay Bahadory</h1>
        <hi>
          Versatile Full-Stack Developer continuing to further my education,
          excellent communication skills, a positive attitude towards challenges
          and strong cultural awareness.
        </hi>
        <div>
          <button className="hire-btn">
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="Bahadory-CV.pdf"
              target="_blank"
            >
              Hire Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
