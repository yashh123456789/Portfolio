import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Projectcard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import P01 from "../Assets/Img/P01.png";
import P02 from "../Assets/Img/P02.png";



export const Projects = () => {

    const projectstab1 = [
      {
        title: "Portfolio",
        imgUrl: P01,
        description:"Using JavaScript,HTML and CSS"
      },
      
      {
        title: "Liquorstore",
        imgUrl: P02,
        description:"Using JavaScript,PHP,MySQL,HTML and CSS"

      },
    ];

    const projectstab2 = [
    
    ];

    const projectstab3 = [
        
    ];

      
    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>I designed and developed a website using HTML, CSS, JavaScript, PHP, and MySQL. The project aimed to create a responsive and user-friendly site with dynamic content. I implemented the front-end design for an engaging user experience and handled back-end processing and database management. This project improved user engagement and received positive feedback for its functionality and design.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Web Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">App Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">UI/UX design</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projectstab1.map((projects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...projects}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      
                      
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              projectstab2.map((projects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...projects}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              projectstab3.map((projects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...projects}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }
    