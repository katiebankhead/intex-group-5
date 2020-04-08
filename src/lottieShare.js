import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./LottieJSONs/logo_animated.json";
import * as shareData from "./LottieJSONs/socialShare.json";
import { Container } from "react-bootstrap";

export default class LottieShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: shareData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYmid slice",
      },
    };
    return (
      <Container>
        <Lottie options={defaultOptions} height={"80px"} />
      </Container>
    );
  }
}
