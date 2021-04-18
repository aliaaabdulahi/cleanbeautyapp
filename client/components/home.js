import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
/**
 * COMPONENT
 */

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const { username } = this.props;
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
        {this.state.products ? (
          this.state.products.map((product) => (
            <div>
              <ProductCard props={product} />
            </div>
          ))
        ) : (
          <div></div>
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
