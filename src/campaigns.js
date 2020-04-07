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
      <bs.Row style={{ padding: "2rem" }}>
        <h1>Campaigns</h1>
      </bs.Row>
      <bs.Row
        style={{ display: "flex", flexDirection: "row" }}
        noGutters
        className='flex-grow-0 flex-shrink-0'>
        <bs.Col md={3} className='d-flex'>
          <bs.Card style={{ padding: "5rem" }}>
            <bs.Card.Text>search features here</bs.Card.Text>
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
