import "../../scss/style.css";
import { images } from "../../components/ImageImports";

function ProjectCard(props) {

  const imgSrc = images[props.image];

  return (
    <div className="project-card">
      <img className="project--card_img" src={imgSrc} alt={props.website_name} />
      <h1 className="client">{props.client_name} <span className="location">{props.client_location}</span></h1>
      <h3 className="name">{props.website_name}</h3>
      <h4 className="cost">Estimated Cost: ${props.estimated_costs}</h4>
    </div>
  );
}

export default ProjectCard;
