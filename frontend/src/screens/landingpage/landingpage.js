import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./landingpage.css";

const Landingpage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Hi🤩 There!!!</h1>
              <p className="subtitle">
                <i>Have a great day</i>
              </p>
            </div>
            <div className="buttoncontainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Landingpage;
