import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
import { produce } from "immer";

//TODO change to proper api
/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      //todo functions here
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      getCartTotal: this.getCartTotal,
      getCart: this.getCart,
      clearCart: this.clearCart
    };
    this.state = {
      categories: {},
      products: {},
      //new for sprint 4
      cart: {},
      cartCount: 0
    };

    //! loading categories here will freeze system
  }
  addToCart = pid => {
    //get current quantity from this.state.cart
    // const qty = this.state.cart[pid]
    // set the new cart
    this.setState(state =>
      produce(state, draft => {
        //check if item is in cart
        if (!draft.cart[pid]) {
          //if not in cart add pid and qty = 1
          draft.cart[pid] = 1;

          draft.cartCount += 1;
        } else {
          const currentQty = draft.cart[pid];
          let newQty = currentQty + 1;

          draft.cart[pid] = newQty;

          draft.cartCount += 1;
        }

        let qty = draft.cart[pid];
        draft.cart[pid] = qty++;
      })
    );
  };

  removeFromCart = pid => {
    this.setState(state =>
      produce(state, draft => {
        if (draft.cart[pid] > 1) {
          draft.cart[pid]--;
          draft.cartCount--;
        } else {
          delete draft.cart[pid];
          draft.cartCount--;
        }
      })
    );
  };

  getCartTotal() {
    let total = 0;
    for (let key in this.cart) {
      const product = Object.values(this.products).find(product => {
        return product.id === parseInt(key);
      });
      total += product.price * this.cart[key];
    }
    return total;
  }

  getCart() {
    return this.cart;
  }

  clearCart = () => {
    this.setState(state =>
      produce(state, draft => {
        draft.cartCount = 0;
        draft.cart = {};
      })
    );
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }

  async componentDidMount() {
    const resp = await axios.get("http://localhost:8000/api/category");
    const resp2 = await axios.get("http://localhost:8000/api/product");
    let cats = {};
    const prods = {};
    for (const c of resp.data) {
      cats[c.id] = c;
    }

    for (const p of resp2.data) {
      prods[p.id] = p;
    }

    this.setState({
      products: prods,
      categories: cats
    });
  }
}
