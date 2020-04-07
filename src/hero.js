import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, Jumbotron } from "react-bootstrap";
import LottieControl from "./lottie"

export default function Hero() {


  return (
    <Container className='py-10  d-flex flex-column align-items-center'>
      <LottieControl />
      <div className='d-flex'>
        <Button
          block
          className='m-4 rounded-pill'
          style={{
            backgroundColor: "#009758",
            borderColor: "#009758",
            width: "20rem",
            height: "4rem",
          }}
          size='lg'>
          TRAINING
        </Button>
        <Button
          block
          className='m-4 rounded-pill'
          style={{ backgroundColor: "#009758", borderColor: "#009758", width: "20rem" }}
          size='lg'>
          LAUNCH
        </Button>
      </div>
      <br />
    </Container>
  );
}
