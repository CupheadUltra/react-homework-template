import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  min-width: 200px;
`;

const Text = styled.h2`
  font-size: 18px;
`;

export default class Choice extends Component {
  render() {
    const { sticker } = this.props;

    return (
      <Box>
        {sticker ? (
          <Text>Вибрано: {sticker.label}</Text>
        ) : (
          <Text>Оберіть стікер 👇</Text>
        )}
      </Box>
    );
  }
}
