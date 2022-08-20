import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import kees from "../../Assets/Projects/kees.png";
import pcb from "../../Assets/Projects/pcb.png";
import comverse from "../../Assets/Projects/comverse.png";
import appmap from "../../Assets/Projects/appmap.png";
import dibs from "../../Assets/Projects/dibs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dibs}
              isBlog={false}
              title="Dibs | NFT Auction House"
              description="DIBS is the NFT Auction site based on the Blockchain and Web3. Sellers put their NFT's for the Auction and the buyers bid on their favourite NFT's. "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://blockchain-dibs-git-main-muzzamil1.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcb}
              isBlog={false}
              title="PCB"
              description="Pakistan Cricket Board (PCB) Official Merchandise Store. Great collection of their Cricketing Apparel & HBL PSL's Collection. Designed with ReactJs, Redux Toolkit, Semantic Ui, Django Python."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://pakshop.pcb.com.pk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kees}
              isBlog={false}
              title="Kees"
              description="Kees.qa. E-Commerce Platform designed for Qata with fully customized and Dynamic design and sections which can be changed according to user's preferences. Designed with ReactJs, Redux Toolkit, Semantic Ui, SCSS, Django Python."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://kees.qa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comverse}
              isBlog={false}
              title="Comverse"
              description="Commverse | Redefining Commerce. It's a custum build E-Commerce solution build for clients to provide them fully customized design and dynamic sections to solve their e-commerce needs. Designed with ReactJs, Redux Toolkit, Semantic Ui, SCSS, Django Python."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://storefront.comverseglobal.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appmap}
              isBlog={false}
              title="AppMapp"
              description="AppMapp is the online collections of hundreds of popular App of all time."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://appmapp-new-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
