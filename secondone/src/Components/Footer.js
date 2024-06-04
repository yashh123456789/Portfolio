import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../Assets/Img/Linkedin.svg";
import navIcon2 from "../Assets/Img/Fb.svg";
import navIcon3 from "../Assets/Img/Git.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="socialcon">
              <a href="https://www.linkedin.com/in/yasiru-ediriweera-35559a273/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/yasirunawodhachathurya.ediriweera?mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/yashh123456789"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

