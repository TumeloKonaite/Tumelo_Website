import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center gy-5">
          <Col md={8} className="home-about-description">
            <div className="observatory-label">System profile</div>
            <h1 style={{ fontSize: "2.6em" }}>
              Software engineering, strengthened by <span className="purple">applied AI</span>
            </h1>

            <p className="home-about-body">
              I am <span className="purple">Tumelo Konaite</span>, a <span className="purple">Software
              Engineer</span> focused on turning business requirements into secure, scalable, and maintainable
              software products.
              <br />
              <br />
              My core work spans <span className="purple">Python and FastAPI services</span>, React and TypeScript
              interfaces, PostgreSQL data layers, automated testing, system integration, and cloud-native delivery.
              I complement that foundation with <span className="purple">AI, machine learning, and data science</span>,
              including Retrieval-Augmented Generation and LLM integration.
              <br />
              <br />
              I work across the complete software delivery path—from architecture and database design to integrations,
              CI/CD, deployment, and production troubleshooting—using intelligent capabilities when they improve the product.
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight /> Building responsive product experiences backed by secure APIs, data, and AI capabilities.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Integrating LLMs, embeddings, and RAG into practical workflows with clear user value.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Shipping tested, containerised applications through repeatable cloud delivery workflows.
              </li>
            </ul>

            <p className="home-about-body">
              With an <span className="purple">MSc in Computational and Applied Mathematics</span>, I combine
              quantitative reasoning and rigorous problem-solving with practical product development and software
              engineering. That foundation helps me reason clearly about data, models, system behaviour, and the
              trade-offs involved in reliable AI-enabled software.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} scale={1.02}>
              <div className="avatar-frame">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row className="insight-row">
          <Col md={4}>
            <div className="insight-panel">
              <span className="signal-label">Engineering stance</span>
              <h3>Data to product</h3>
              <p>I connect product interfaces, APIs, databases, and AI workflows into cohesive systems.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="insight-panel">
              <span className="signal-label">What I optimize</span>
              <h3>Reliable systems</h3>
              <p>Security, automated testing, maintainability, and clear outcomes matter more than novelty alone.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="insight-panel">
              <span className="signal-label">Build philosophy</span>
              <h3>Production over prototypes</h3>
              <p>The goal is not just intelligent demos, but reliable software platforms teams can own, scale, and trust.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
