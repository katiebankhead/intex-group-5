import React from "react";
import * as bs from "react-bootstrap";
import CampaignCard from "./campaign-card";
import { useRouteMatch } from "react-router-dom";
import AppContext from "./context";

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
      <h1>Campaigns</h1>
      <bs.Col>
        search features here
      </bs.Col>
      <bs.Col>
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
    </bs.Container>
  );
}
export default Campaigns;
