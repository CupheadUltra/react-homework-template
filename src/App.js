import React, { Component } from "react";
import stickers from "./stickers.json";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #f5f5f5;
`;

export default class App extends Component {
  state = {
    selectedSticker: null
  };

  handleSelect = (sticker) => {
    this.setState({ selectedSticker: sticker });
  };

  render() {
    return (
      <AppContainer>
        <h1>Стікерпак</h1>

        <StickerList
          stickers={stickers}
          onSelect={this.handleSelect}
        />

        <Choice sticker={this.state.selectedSticker} />
      </AppContainer>
    );
  }
}
