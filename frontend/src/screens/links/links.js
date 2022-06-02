import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./links.css";

const Links = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Under Construction👷‍♂️</h1>
              <p className="subtitle">
                <a href="#" target="_blank">
                  {" "}
                  <Button>click</Button> to view my static site created
                </a>
              </p>
              <p className="subtitle">Have a great day💖</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Links;
