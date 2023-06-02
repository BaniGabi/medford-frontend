import React, { Component } from "react";
import ProductRow from "./ProductRow";
import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
  "pk_test_525433834fcf7ed61bfc3b4f372ad76a30c24ee08a6cc"
);

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      console.log(result.data);
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <>
        <div className="container main-content">
          {this.state.products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                image={product.image.url}
                name={product.name}
                description={product.description}
                price={product.price.formatted_with_symbol}
                productId={product.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default ProductList;
