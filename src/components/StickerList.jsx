import React, { Component } from "react";
import Sticker from "./Sticker";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export default class StickerList extends Component {
  render() {
    const { stickers, onSelect } = this.props;

    return (
      <List>
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            img={sticker.img}
            label={sticker.label}
            onClick={() => onSelect(sticker)}
          />
        ))}
      </List>
    );
  }
}
