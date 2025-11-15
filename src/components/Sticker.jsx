import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  padding: 10px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 8px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export default class Sticker extends Component {
  render() {
    const { img, label, onClick } = this.props;

    return (
      <Card onClick={onClick}>
        <Img src={img} alt={label} />
        <Label>{label}</Label>
      </Card>
    );
  }
}
