import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ContactForm from "./ContactForm";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              lg={9}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I Am</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              lg={3}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <Row className="work-with-me-row">
            <Col lg={6} className="work-with-me-copy">
              <h1 className="project-heading">
                Work <strong className="purple">With Me</strong>
              </h1>
              <p style={{ color: "white", marginBottom: "16px" }}>
                I help teams turn product ideas into secure, production-ready software systems.
              </p>
              <p style={{ color: "white", marginBottom: "16px" }}>
                My core strength is software engineering, supported by practical experience across AI, machine learning,
                data science, and cloud delivery.
              </p>
              <p style={{ color: "white", marginBottom: "12px" }}>
                In practice, that usually means:
              </p>
              <ul>
                <li className="about-activity" style={{ marginBottom: "12px" }}>
                  <ImPointRight /> <span className="purple">AI-powered product development</span> with LLMs,
                  embeddings, retrieval, and intelligent automation.
                </li>
                <li className="about-activity" style={{ marginBottom: "12px" }}>
                  <ImPointRight /> <span className="purple">Full-stack delivery</span> with React, TypeScript,
                  FastAPI, PostgreSQL, and secure API integrations.
                </li>
                <li className="about-activity" style={{ marginBottom: "12px" }}>
                  <ImPointRight /> <span className="purple">Architecture and quality</span> through modular design,
                  automated testing, authentication, and production troubleshooting.
                </li>
                <li className="about-activity" style={{ marginBottom: "12px" }}>
                  <ImPointRight /> <span className="purple">Production analytics and cloud deployment</span> for
                  operational systems, decision support, and maintainable delivery.
                </li>
              </ul>
              <p className="work-with-me-intro">
                If you are working on a practical AI problem and need engineering support, send the details here and
                I will follow up directly.
              </p>
            </Col>
            <Col lg={6}>
              <ContactForm />
            </Col>
          </Row>

          <h1 className="project-heading">
            Core <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Supporting <strong className="purple">Tools</strong>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
