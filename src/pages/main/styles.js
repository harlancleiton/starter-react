import styled from 'styled-components';

export const ProductList = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
`;

export const ProductItem = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;

export const Button = styled.a`
  height: 42px;
  border-radius: 5px;
  border: 2px solid #da552f;
  background: none;
  margin-top: 10px;
  color: #da552f;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  &:hover {
    background: #da552f;
    color: #fff;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background: #da552f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
