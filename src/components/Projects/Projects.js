import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Project5 from "../../Assets/Projects/5.png";
import Project6 from "../../Assets/Projects/6.png";
import Project10 from "../../Assets/Projects/10.png";
import BeautyVerseImage from "../../Assets/Projects/beautyverse.png";
import LetsGoLogo from "../../Assets/Projects/letsg0-logo.png";
import KasiFplImage from "../../Assets/Projects/kasifpl.svg";
import MedicalInsuranceImage from "../../Assets/Projects/medical-insurance-cost.png";
import MakeyImage from "../../Assets/Projects/makey.svg";

const featuredProjects = [
  {
    imgPath: BeautyVerseImage,
    title: "BeautyVerse - Beauty Services Marketplace",
    description: `Built a beauty services marketplace where providers create and manage service listings while customers browse beauty services and submit enquiries.

The platform demonstrates reusable backend architecture, listing management, categories, authentication, image handling, and marketplace-style enquiry flows.

Skills: FastAPI, PostgreSQL, SQLAlchemy, Alembic, Docker.`,
    demoLink: "https://beautyverse.co.za/",
    demoLabel: "Website",
  },
  {
    imgPath: KasiFplImage,
    title: "KasiFPL - AI-Powered Fantasy Premier League Intelligence Platform",
    description: `Built an AI-powered Fantasy Premier League platform that analyses YouTube content from trusted FPL experts and transforms their recommendations into structured, gameweek-specific insights.

The platform ingests expert transcripts, extracts player recommendations, captaincy picks, transfers, risks, and team reveals, then combines them into a transparent Consensus XI using expert support and valid FPL formation rules. It also supports historical gameweek reports, source provenance, player validation, confidence indicators, and interactive squad visualisation.

Skills: Python, FastAPI, React, PostgreSQL, Generative AI, Retrieval Pipelines, YouTube Transcripts, Data Aggregation, Docker, CI/CD.`,
    demoLink: "https://kasifpl.co.za/",
    demoLabel: "Website",
  },
  {
    imgPath: Project5,
    title: "Customer Churn Prediction",
    description: `Designed predictive analytics workflows to identify customers with high churn risk.

Supported targeted retention strategies through risk scoring and behavioral insights.

Skills: SQL, Python, Classification Models, Business Analytics.`,
    ghLink: "https://github.com/TumeloKonaite/Customer-Churning-Repo",
    demoLink: "https://customer-churning-repo.vercel.app/",
    demoLabel: "Website",
  },
  {
    imgPath: MedicalInsuranceImage,
    title: "MedEstimate - Medical Insurance Cost Prediction",
    description: `Built an end-to-end machine learning application that estimates annual medical insurance charges from age, BMI, smoking status, dependants, sex, and region.

Benchmarked five regression models on a held-out test set. Random Forest achieved the strongest result with an R² of 0.8683 and MAE of approximately $2,209; 10-fold cross-validation averaged 0.8818 R².

Skills: Python, FastAPI, React, Scikit-learn, Regression, MLOps, Docker.`,
    ghLink: "https://github.com/TumeloKonaite/Medical-Insurance-Cost",
    demoLink: "https://medical-insurance-cost.vercel.app/",
    demoLabel: "Website",
  },
  {
    imgPath: LetsGoLogo,
    title: "LetsGo South Africa - AI-Powered Tourism Platform",
    description: `Built a full-stack tourism platform for LetsGo South Africa where admins manage travel packages and customers browse listings, submit enquiries, and chat with an AI travel assistant.

Delivered a FastAPI backend, PostgreSQL database, React/Vite frontend, authentication, image workflows, enquiry handling, and cloud deployment.

Skills: FastAPI, React, PostgreSQL, AI Chat, Admin Workflows.`,
    demoLink: "https://letsgodb.web.app/",
    demoLabel: "Website",
  },
  {
    imgPath: Project6,
    title: "MedDesk - AI Clinical Intake Proof of Concept",
    description: `Built an AI-assisted clinical intake proof of concept where patients report symptoms before consultation and clinicians receive structured draft SOAP notes with surfaced red flags.

Designed as clinician-support software to structure intake information and improve review efficiency, not as a replacement for medical judgment.

Skills: FastAPI, Generative AI, Clinical Intake, SOAP Notes, Prompt Engineering.`,
    demoLink: "https://meddesk.co.za/",
    demoLabel: "Website",
  },
  {
    imgPath: Project10,
    title: "Synthetic Patient-Doctor Data Pipeline",
    description: `Built a synthetic clinical consultation dataset pipeline that generates structured doctor-patient records and optional full-consultation audio for downstream AI evaluation.

The system produces JSONL consultation records, clinical extraction outputs, TTS-ready scripts, audio manifests, and Hugging Face export bundles for text and audio datasets.

Skills: Python, Synthetic Data, OpenAI APIs, TTS, Dataset Engineering.`,
    ghLink: "https://github.com/TumeloKonaite/synthetic_data",
    demoLink: "https://huggingface.co/datasets/TumeloKonaite/synthetic-patient-dr-data",
    demoLabel: "Dataset",
  },
  {
    imgPath: MakeyImage,
    title: "Makey - South African Room Rental Marketplace",
    description: `Built a full-stack marketplace where renters browse published rooms across South Africa and compare rent, deposits, furnishing, and move-in dates.

Delivered role-based authentication, an administrator dashboard, listing and image management, a FastAPI backend, and automated CI/CD deployment workflows.

Skills: FastAPI, TanStack Start, TypeScript, PostgreSQL, Clerk, Modal, Vercel, CI/CD.`,
    ghLink: "https://github.com/TumeloKonaite/makey",
    demoLink: "https://www.makey.co.za/",
    demoLabel: "Website",
  },
];

const additionalRepositories = [
  {
    name: "tumelo-digital-twin",
    href: "https://github.com/TumeloKonaite/tumelo-digital-twin",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of production-oriented AI systems, full-stack platforms, and digital products.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {featuredProjects.map((project) => (
            <Col key={project.title} md={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>

        <section className="project-repository-shell" aria-label="Additional public repositories">
          <div className="project-repository-panel">
            <p className="project-repository-kicker">Additional Public Repositories</p>
            <h2>More code available on GitHub</h2>
            <p>
              Some repositories are not currently featured as portfolio cards, but are still available for review.
            </p>
            <div className="project-repository-links">
              {additionalRepositories.map((repository) => (
                <a
                  key={repository.name}
                  className="project-repository-link"
                  href={repository.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                  <span>{repository.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default Projects;
