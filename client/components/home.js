import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
/**
 * COMPONENT
 */

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.loadProducts();
  }

  handleChange(e) {
    this.setState({
      searchField: e.target.value,
    });
  }

  render() {
    console.log("props of home", this.props);
    const { username } = this.props;
    const products = this.props.products.filter((product) =>
      product["currentSku/imageAltText"]
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    );
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
            onChange={this.handleChange}
          />
        </div>
        <div className="card-container">
          {products ? (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={`https://sephora.com${product.heroImage}`} />
                <h3>{product.brandName}</h3>
                <h5>{product.displayName}</h5>
              </div>
            ))
          ) : (
            <div>"Loading"</div>
          )}
        </div>
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
