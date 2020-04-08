import React from "react";
import { Container, Button } from "react-bootstrap";
import LottieControl from "./lottie";

export default function Hero() {
  return (
    <Container className='py-10  d-flex flex-column align-items-center'>
      <LottieControl />
      <div className='d-flex'>
        <Button
          block
          className='m-4 rounded-pill font-weight-bold lato'
          style={{
            backgroundColor: "#83AC25",
            borderColor: "#FFFFFF",
            borderWidth: "3pt",
            width: "20rem",
            height: "4rem",
          }}
          size='lg'>
          ANALYSTS
        </Button>
        <Button
          block
          className='m-4 rounded-pill font-weight-bold'
          style={{
            backgroundColor: "#FFFFFF	",
            borderColor: "#83AC25",
            borderWidth: "3pt",
            width: "20rem",
            height: "4rem",
            color: "#83AC25",
          }}
          size='lg'>
          TRAINING
        </Button>
        <Button
          block
          className='m-4 rounded-pill font-weight-bold lato'
          style={{
            backgroundColor: "#83AC25",
            borderColor: "#FFFFFF",
            borderWidth: "3pt",
            width: "20rem",
          }}
          size='lg'>
          CAMPAIGN CREATORS
        </Button>
      </div>
      <br />
    </Container>
  );
}
