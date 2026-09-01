import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SOCIAL_LINKS } from "../../constants";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            <strong>Location:</strong> Johannesburg, South Africa |{" "}
            <a className="purple" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a className="purple" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            |{" "}
            <a className="purple" href={SOCIAL_LINKS.portfolio} target="_blank" rel="noreferrer">
              Website
            </a>
          </p>

          <h2 className="purple" style={{ fontSize: "1.35rem", marginTop: "28px" }}>
            Summary
          </h2>
          <p style={{ textAlign: "justify" }}>
            Software Engineer focused on building production-ready backend systems, AI-powered applications,
            and cloud-native solutions. I enjoy learning in public, contributing to open source, and using the
            internet and modern AI tools to continuously expand my skills. I am passionate about taking ideas
            from concept to deployment, adapting quickly to new technologies, and solving real-world problems.
          </p>

          <h2 className="purple" style={{ fontSize: "1.35rem", marginTop: "28px" }}>
            Professional Experience
          </h2>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">BeautyVerse | Software Engineer</span>{" "}
              <strong>(Dec 2025 - Jul 2026 · 8 mos)</strong>
              <br />
              Architected and developed high-scalability backend services for BeautyVerse&apos;s business
              management platform and marketplace. Designed robust database structures, created RESTful APIs
              with FastAPI, and implemented Keycloak for identity management, SSO, RBAC, and OAuth2/OpenID
              Connect authentication. Integrated payment gateways and external services while automating
              deployments using AWS, Docker, Linux, CI/CD pipelines, and Infrastructure as Code.
            </li>
            <li className="about-activity" style={{ marginTop: "16px" }}>
              <ImPointRight /> <span className="purple">Huawei | Transmission Engineer</span>{" "}
              <strong>(Dec 2022 - Dec 2025 · 3 yrs 1 mo)</strong>
              <br />
              Designed end-to-end transmission and infrastructure solutions based on customer, network,
              capacity, security, and availability requirements. Produced solution architectures and technical
              implementation plans covering transmission equipment, servers, network connectivity, and
              firewalls. Installed and configured physical and virtual servers, firewall policies,
              transmission equipment, and supporting network services. Conducted integration, testing,
              commissioning, troubleshooting, performance optimisation, and technical acceptance to ensure
              secure, reliable, and resilient service delivery. Collaborated with customers, vendors, project
              managers, and field teams throughout the design and deployment lifecycle.
            </li>
            <li className="about-activity" style={{ marginTop: "16px" }}>
              <ImPointRight /> <span className="purple">Huawei | Data Analyst</span>{" "}
              <strong>(Dec 2019 - Dec 2022 · 3 yrs 1 mo)</strong>
              <br />
              Analysed large-scale telecommunications data to track network performance, project delivery,
              operational costs, and infrastructure KPIs. Developed centralised data pipelines, automated
              reporting workflows, and interactive dashboards that transformed operational data into
              actionable insights for technical teams and management. Performed data cleansing, validation,
              trend analysis, and performance monitoring to improve reporting accuracy, auditability, resource
              planning, and decision-making. Used Huawei Cloud, Linux, and containerised analytics services to
              deliver reliable and scalable reporting solutions.
            </li>
          </ul>

          <h2 className="purple" style={{ fontSize: "1.35rem", marginTop: "28px" }}>
            Core Skills
          </h2>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend engineering with Python, FastAPI, Flask, SQLAlchemy, Pydantic, and REST APIs
            </li>
            <li className="about-activity">
              <ImPointRight /> Generative AI, LLM integration, prompt engineering, RAG, FAISS, and ChromaDB
            </li>
            <li className="about-activity">
              <ImPointRight /> Keycloak, OAuth2, OpenID Connect, JWT, RBAC, and SSO
            </li>
            <li className="about-activity">
              <ImPointRight /> PostgreSQL, MySQL, Redis, DynamoDB, and MongoDB
            </li>
            <li className="about-activity">
              <ImPointRight /> AWS, Huawei Cloud, Docker, GitHub Actions, Terraform, Ansible, and Linux
            </li>
            <li className="about-activity">
              <ImPointRight /> Pytest, unit, integration, and system testing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Taking ideas from concept to reliable production systems.&quot;
          </p>
          <footer className="blockquote-footer">Tumelo Konaite</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
