import React, { Component } from "react";
import axios from "axios";
import ImageResult from "../imageResult/imageResult";
class Search extends Component {
  state = {
    inputText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "31991084-c188704948ef7cee7ece7258c",
    images: [],
  };
  handleTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") this.setState({ images: [] });
      else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.inputText}&image_type=photo&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  render() {
    let { images, inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          style={{
            backgroundColor: "black",
            color: "white",
            marginLeft: 570,
            marginTop: 100,
            paddingTop: 20,
            paddingLeft: 70,
            fontSize: 30,
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            outline: "none",
            borderBottomStyle: "groove",
          }}
          placeholder="Search For Images"
          name="inputText"
          value={inputText}
          onChange={this.handleTextChange}
        ></input>

        {images.length > 0 ? <ImageResult images={images} /> : ""}
      </div>
    );
  }
}

export default Search;
