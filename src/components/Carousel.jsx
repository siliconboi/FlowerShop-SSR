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
      <div>
        {images.map((image, index) => (
          <img
            src={image.image_url}
            alt=""
            key={image.image_url}
            data-index={index}
            style={index === active ?{height:"15rem"}:{height:"10rem"}}
            onClick={this.handleIndexClick}
          />
        ))}
      </div>
    );
  }
}

export { Carousel };
