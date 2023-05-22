/* eslint-disable react/prop-types */
import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex items-center justify-center overflow-auto">
        {images.map((image, index) => (
          <img
          className=" rounded m-1 inline"
            src={image.image_url}
            alt=""
            key={index}
            data-index={index}
            style={index === active ?{height:"20rem"} : {height:"12rem"}}
            onClick={this.handleIndexClick}
          />
        ))}
      </div>
    );
  }
}

export { Carousel };
