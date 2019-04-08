import React, { Component } from "react";
import { Carousel } from "../component/carousel/Carousel";

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel
          carouselItems={[
            <img
              src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
              height="200px"
              alt=""
            />,
            <img
              src="https://www.nationalgeographic.com.es/medio/2019/01/03/zhangjiajie_e86f03ed_1500x1001.jpg"
              height="200px"
              alt=""
            />,
            <img
              src="https://www.nationalgeographic.com.es/medio/2019/03/26/lithium-mining-i_6f9b895e_2000x1595.jpg"
              height="200px"
              alt=""
            />
          ]}
        />
      </div>
    );
  }
}
