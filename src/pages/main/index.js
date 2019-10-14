import React, { Component } from 'react';
import api from '../../services/api';
import { ProductDescription, ProductList, ProductItem, Button } from './styles';

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <ProductItem key={product._id}>
            <strong>{product.title}</strong>
            <ProductDescription>{product.description}</ProductDescription>
            <Button href="">Acessar</Button>
          </ProductItem>
        ))}
      </ProductList>
    );
  }
}
