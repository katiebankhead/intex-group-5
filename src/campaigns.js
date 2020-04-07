import React from "react";
import * as bs from "react-bootstrap";
//import PRODUCTS from "./products";
import ProductCard from "./product-card";
import { useRouteMatch } from "react-router-dom";
import AppContext from "./context";

function Campaigns(props) {
  //let products = Object.values(PRODUCTS);
  const context = React.useContext(AppContext);
  let products = Object.values(context.products); //! Change to proper api
  const category_match = useRouteMatch("/category/:cid");

  if (category_match) {
    products = products.filter(p => {
      return p.category.title === category_match.params.cid;
    });
  }
  return (
    <bs.Container>
      <bs.Row className='justify-content-center'>
        {products.map(n => {
          return (
            <ProductCard
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
      </bs.Row>
    </bs.Container>
  );
}
export default Campaigns;
