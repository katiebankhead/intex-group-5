import React from "react";
import * as bs from "react-bootstrap";
import CampaignCard from "./campaign-card";
import { useRouteMatch } from "react-router-dom";
import AppContext from "./context";
import { Formik, Form, Field } from "formik";

function Campaigns(props) {
  //const context = React.useContext(AppContext);
  //let campaigns = Object.values(context.products); //! Change to proper api
  //const category_match = useRouteMatch("/category/:cid"); //! Change to proper api

  // if (category_match) {
  //   campaigns = campaigns.filter(p => {
  //     return p.category.title === category_match.params.cid;
  //   });
  // }
  return (
    <bs.Container>
      <bs.Row className='justify-content-center' style={{ display: "flex", padding: "2rem" }}>
        <h1 className='d-flex align-self-center'>campaigns</h1>
      </bs.Row>
      <bs.Row
        style={{ display: "flex", flexDirection: "row" }}
        noGutters
        className='flex-grow-0 flex-shrink-0'>
        <bs.Col md={3} className='d-flex'>
          <bs.Card style={{ padding: "2rem" }}>
            <bs.Form>
              <bs.Form.Group controlId='exampleForm.ControlInput1'>
                <bs.Form.Label>Email address</bs.Form.Label>
                <bs.Form.Control type='email' placeholder='name@example.com' />
              </bs.Form.Group>
              <bs.Form.Group controlId='exampleForm.ControlSelect1'>
                <bs.Form.Label>Example select</bs.Form.Label>
                <bs.Form.Control as='select'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </bs.Form.Control>
              </bs.Form.Group>
              <bs.Form.Group controlId='exampleForm.ControlSelect2'>
                <bs.Form.Label>Example multiple select</bs.Form.Label>
                <bs.Form.Control as='select' multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </bs.Form.Control>
              </bs.Form.Group>
              <bs.Form.Group controlId='exampleForm.ControlTextarea1'>
                <bs.Form.Label>Example textarea</bs.Form.Label>
                <bs.Form.Control as='textarea' rows='3' />
              </bs.Form.Group>
              <bs.Button
                block
                className='m-4 rounded-pill font-weight-bold'
                type='submit'
                style={{
                  backgroundColor: "#FFFFFF	",
                  borderColor: "#83AC25",
                  borderWidth: "3pt",
                  width: "10rem",
                  height: "3rem",
                  color: "#83AC25",
                }}
                size='md'>
                SUBMIT
              </bs.Button>
            </bs.Form>
          </bs.Card>
        </bs.Col>
        <bs.Col className='d-flex'>
          <bs.Container>
            <CampaignCard />
            {/* <bs.Row className='justify-content-center'>
            {campaigns.map(n => {
              return (
                <CampaignCard //TODO populate with model
                  key={n.id}
                  id={n.id}
                  name={n.name}
                  category={n.category}
                  filename={n.filename}
                  description={n.description}
                  price={n.price}
                />
              );
            })}
          </bs.Row> */}
          </bs.Container>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  );
}
export default Campaigns;
