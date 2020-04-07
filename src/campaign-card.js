import React from "react";
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";

function CampaignCard(props) {
  return (
    <bs.Card border='light' style={{ width: "30rem" }}>
      <bs.Card.Img variant='top' src={"/media/products/" + props.filename + "-1.png"} />
      <bs.Card.Body>
        <bs.Card.Title>{props.name}</bs.Card.Title>
        <bs.Card.Text>${props.price}</bs.Card.Text>
        <Link
          to={"/product/" + props.id} //! Change to proper api 
          variant='primary'
          className='btn btn-light'
          style={{ position: "absolute", right: "10px", top: "10px" }}>
          Details
        </Link>
      </bs.Card.Body>
    </bs.Card>
  );
}

export default CampaignCard;

//!ALL FUNCTION NAMES NEED TO BE CAPITALIZED
