import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import cv from "../Assets/Doc/mycv.pdf";
import 'animate.css';



export const Banner = () => {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                 <span className="tagline">Welcome to my Portfolio</span>
                    <p><h1>Hello, I'm Yasiru Ediriweera.</h1></p>
                    <p>I am a Software Engineering undergraduate with strong skills in front-
                       end development, cloud computing, and graphic design. I excel in
                       planning, coordinating, and teamwork, with a keen ability to
                       communicate effectively. My goal is to support companies in achieving
                       their objectives and vision through my technical expertise and
                       collaborative mindset.
                   </p>
                    

                      <button className="download">
                        <a href={cv} download="cv">Download CV </a>
                      </button>
                     </div>
                }
                     
              </TrackVisibility>
            </Col>
            <Col xs={20} md={5} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
  