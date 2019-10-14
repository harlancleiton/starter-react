import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Btn,
  BtnGroup,
  ProductDescription,
  ProductList,
  ProductItem,
  Button
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  handlePrevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  handleNextPage = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, productInfo, page } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <ProductItem key={product._id}>
            <strong>{product.title}</strong>
            <ProductDescription>{product.description}</ProductDescription>
            {/* <Button href="">Acessar</Button> */}
            <Link to={`/products/${product._id}`}>
              <Button>Acessar</Button>
            </Link>
          </ProductItem>
        ))}
        <BtnGroup>
          <Btn disabled={page === 1} onClick={this.handlePrevPage}>
            Anterior
          </Btn>
          <Btn
            disabled={page === productInfo.page}
            onClick={this.handleNextPage}
          >
            Próximo
          </Btn>
        </BtnGroup>
      </ProductList>
    );
  }
}
