import { Col } from "react-bootstrap";

export const ProjectCard = ({ title,imgUrl,description }) => {
    return (
      <Col size={12} sm={3} md={4} >
        <div className="proj-imgbx">
        <img src={imgUrl} />
          
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            
          </div>
        </div>
      </Col>
    )
  }