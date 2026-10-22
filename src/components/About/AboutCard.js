import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SOCIAL_LINKS } from "../../constants";

const experience = [
  {
    company: "Softwareverse",
    role: "Software Engineer",
    dates: "Dec 2025 – Present",
    description:
      "Design, develop, test, and maintain full-stack and AI-powered applications using Python, FastAPI, React, TypeScript, PostgreSQL, and REST APIs. Build LLM, embedding, and retrieval-augmented generation features; contribute to system architecture and database design; write automated tests; troubleshoot production issues; and support reliable cloud delivery with Docker, GitHub Actions, and Terraform.",
  },
  {
    company: "Huawei Technologies",
    role: "Transmission Engineer",
    dates: "Dec 2022 – Dec 2025",
    description:
      "Collaborated with customers and cross-functional teams to translate business requirements into practical engineering solutions. Contributed to solution architecture, feasibility and implementation planning, coordinated live-network integrations, performed quality assurance and technical troubleshooting, and developed an AI-powered internal knowledge assistant hosted on Huawei Cloud.",
  },
  {
    company: "Huawei Technologies",
    role: "Data Analyst",
    dates: "Dec 2019 – Dec 2022",
    description:
      "Collected, cleaned, and analysed operational and customer data to uncover trends, investigate anomalies, and support decisions. Performed data validation, feature engineering, and model evaluation; explored classification models for repeat service contacts; and communicated actionable findings to engineering and business stakeholders.",
  },
];

const skillGroups = [
  ["Full-stack engineering", "Python, FastAPI, React, TypeScript, SQLAlchemy, Pydantic, REST APIs, and webhooks"],
  ["AI engineering", "LLM integration, RAG, LangChain, embeddings, intelligent automation, and OpenAI APIs"],
  ["Data and MLOps", "PostgreSQL, MySQL, Redis, pgvector, Scikit-learn, Pandas, NumPy, and MLflow"],
  ["Cloud and delivery", "AWS, GCP, Huawei Cloud, Docker, GitHub Actions, Terraform, CI/CD, and Linux"],
  ["Security and quality", "Keycloak, JWT, authentication, authorisation, API security, Pytest, and Unittest"],
];

const certifications = [
  "AWS Certified Generative AI Developer – Professional (Early Adopter), 2026",
  "AWS Certified Solutions Architect – Associate, 2026",
  "SAS Certified Associate – Programming Fundamentals Using SAS 9.4, 2026",
  "AWS Certified Machine Learning Engineer – Associate, 2025",
  "AWS Certified AI Practitioner, 2025",
];

function AboutCard() {
  return (
    <Card className="quote-card-view profile-card">
      <Card.Body>
        <div className="profile-contact-line">
          <strong>Johannesburg, South Africa</strong>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${SOCIAL_LINKS.email}`}>Email</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noreferrer">Website</a>
        </div>

        <section className="profile-section" aria-labelledby="profile-summary">
          <p className="profile-eyebrow">AI Full-Stack Engineer</p>
          <h2 id="profile-summary">Building intelligent products end to end</h2>
          <p className="profile-summary">
            AI Full-Stack Engineer with an MSc in Computational and Applied Mathematics and hands-on experience
            designing, developing, deploying, and maintaining full-stack and AI-powered applications. I work across
            Python, FastAPI, React, TypeScript, PostgreSQL, REST APIs, Docker, and cloud technologies, with practical
            experience integrating large language models, retrieval-augmented generation, and intelligent automation
            into secure, scalable, and maintainable software.
          </p>
        </section>

        <section className="profile-section" aria-labelledby="profile-experience">
          <h2 id="profile-experience">Professional Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.role}`}>
                <div className="experience-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.dates}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section" aria-labelledby="profile-skills">
          <h2 id="profile-skills">Core Skills</h2>
          <ul className="profile-skill-list">
            {skillGroups.map(([label, skills]) => (
              <li className="about-activity" key={label}>
                <ImPointRight /> <strong>{label}:</strong> {skills}
              </li>
            ))}
          </ul>
        </section>

        <div className="profile-credentials-grid">
          <section className="profile-section" aria-labelledby="profile-education">
            <h2 id="profile-education">Education</h2>
            <div className="credential-item">
              <strong>MSc in Computational and Applied Mathematics</strong>
              <span>University of the Witwatersrand · 2021–2024</span>
            </div>
            <div className="credential-item">
              <strong>BSc Honours in Mathematical Sciences</strong>
              <span>University of the Witwatersrand · 2019</span>
            </div>
          </section>

          <section className="profile-section" aria-labelledby="profile-certifications">
            <h2 id="profile-certifications">Certifications</h2>
            <ul className="certification-list">
              {certifications.map((certification) => <li key={certification}>{certification}</li>)}
            </ul>
          </section>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
