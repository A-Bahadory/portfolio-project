import "./about.css";
function About() {
  return (
    <div className="about">
      <img className="img" src="photo.jpeg" alt="" />
      {/* <div className="image-cover">
      </div> */}
      <div className="summery">
        <p>Hello, my name is</p>
        <h1 className="name">Ahmadzay Bahadory</h1>
        <h1 className="summery-text">
          Versatile Full-Stack Developer continuing to further my education,
          excellent communication skills, a positive attitude towards challenges
          and strong cultural awareness.
        </h1>
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
