import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ProductCard from "./ProductCard";
/**
 * COMPONENT
 */

class Home extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    console.log("props of home", this.props);
    const { username } = this.props;
    const products = this.props.products;
    return (
      <div className="container-div">
        <div>
          <h3>Welcome, {username}</h3>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Search Products"
            variant="outlined"
          />
        </div>
        {products ? (
          products.map((product) => (
            <div key={product.id}>
              <img src={`https://sephora.com${product.heroImage}`} />
              <h3>{product.brandName}</h3>
              <h5>{product.displayName}</h5>
            </div>
          ))
        ) : (
          <div>"Loading"</div>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mapState, mapDispatch)(Home);
