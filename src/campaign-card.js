import React from "react";
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";

function CampaignCard(props) {
  return (
    <bs.Card>
      {/* <bs.Card.Img variant='top' src={"/media/products/" + props.filename + "-1.png"} /> */}
      <bs.Card.Body>
        <bs.Row style={{ display: "flex", flexDirection: "row" }}>
          <bs.Card.Img
            src={require("./testimage.png")}
            style={{ width: "15rem", padding: "2rem" }}
          />
          <bs.Col>
            <bs.Card.Title>Campaign Name</bs.Card.Title>
            <bs.Card.Subtitle>Campaign owner</bs.Card.Subtitle>
            <bs.Card.Text style={{ padding: "1rem" }}>
              the details go here lorum ipsum etc
            </bs.Card.Text>
            <center>
              <Link
                className='btn btn-light absolute-center m-4 rounded-pill font-weight-bold'
                style={{
                  backgroundColor: "#83AC25",
                  borderColor: "#FFFFFF",
                  borderWidth: "3pt",
                  width: "10rem",
                  height: "3rem",
                  fontSize: "14pt",
                  color: "#FFFFFF",
                }}
                size='lg'>
                DETAILS
              </Link>
            </center>
          </bs.Col>
        </bs.Row>
        {/* <bs.Card.Title>{props.name}</bs.Card.Title>
        <bs.Card.Text>${props.price}</bs.Card.Text>
        <Link
          to={"/product/" + props.id} //! Change to proper api 
          variant='primary'
          className='btn btn-light'
          style={{ position: "absolute", right: "10px", top: "10px" }}>
          Details
        </Link> */}
      </bs.Card.Body>
    </bs.Card>
  );
}

export default CampaignCard;

//!ALL FUNCTION NAMES NEED TO BE CAPITALIZED
