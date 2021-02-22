import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import funny_3d_human_dancing from "./main-page-assets/funny_3d_human_dancing.mp4";

export const Main = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-9999",
        }}
      >
        <source src={funny_3d_human_dancing} type="video/mp4" />
      </video>
      <Container fluid className="jokes-category-con">
        <Row>
          <Col md={{ span: 2 }}>
            <a className="jokes-category" href="/love-and-sex">
              Love and Sex
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2 }}>
            <i
              className="fas fa-heart"
              style={{
                fontSize: "200%",
                color: "red",
              }}
            >
              {" "}
            </i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <a className="jokes-category" href="/long-jokes">
              Long Jokes
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <i
              class="fas fa-flushed"
              style={{
                fontSize: "200%",
                color: "#696969",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <a className="jokes-category" href="/naughty-jokes">
              Naughty Jokes
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <i
              class="fab fa-mailchimp"
              style={{
                fontSize: "200%",
                color: "#8B4513",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 8 }}>
            <a className="jokes-category" href="/different-jokes">
              Different Jokes
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 8 }}>
            <i
              class="fas fa-dizzy"
              style={{
                fontSize: "200%",
                color: "#FFA500",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 3 }}>
            <a className="jokes-category" href="/animals-jokes">
              Animals
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 3 }}>
            <i
              class="fas fa-dog"
              style={{
                fontSize: "200%",
                color: "black",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 7 }}>
            <a className="jokes-category" href="/religion-jokes">
              Religion
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 7 }}>
            <i
              class="fas fa-praying-hands"
              style={{
                fontSize: "200%",
                color: "#00FFFF",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <a className="jokes-category" href="/nations-jokes">
              Nations
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <i
              class="fas fa-flag"
              style={{
                fontSize: "200%",
                color: "white",
              }}
            ></i>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 9 }}>
            <a className="jokes-category" href="/politics-jokes">
              Politics
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 9 }}>
            <i
              class="fas fa-landmark"
              style={{
                fontSize: "200%",
                color: "#FFD700",
              }}
            ></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
