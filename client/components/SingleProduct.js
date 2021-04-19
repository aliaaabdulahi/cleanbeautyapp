import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/product";
class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h2>{this.props.product.brandName}</h2>
        <img src={`https://sephora.com${this.props.product.heroImage}`} />
        <h3>{this.props.product.displayName}</h3>
        <h4>Is it Natural? </h4>
        <p>{this.props.product["currentSku/isNatural"]}</p>
        <h4>Is it Orangic? </h4>
        <p>{this.props.product["currentSku/isOrganic"]}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
