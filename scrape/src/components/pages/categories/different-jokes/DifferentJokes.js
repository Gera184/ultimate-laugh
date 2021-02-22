import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../joke-data/data.json";

export const DifferentJokes = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const jokes = data;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const category = jokes.find(function (item) {
      return item.CategoryName === "בדיחות שונות";
    });

    const results = category.Jokes.filter((joke) =>
      joke.JokeName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  // var jokes = data[3];

  return (
    <div>
      <Container id="wrapper" fluid>
        <Row>
          <Col md={{ span: 6 }}>
            <div class="content">
              <p>
                Different Jokes
                <i
                  class="fas fa-dizzy"
                  style={{
                    fontSize: "100%",
                    color: "#FFA500",
                  }}
                ></i>
              </p>
            </div>
            <div class="background">
              <img
                src="http://nuclearpixel.com/content/icons/2010-02-09_stellar_icons_from_space_from_2005/earth_128.png"
                alt="background"
              />
            </div>
          </Col>
          <Col className="exit-icon-col" md={{ offset: 5 }}>
            <a href="/home" className="exit-icon">
              <i
                class="fas fa-door-open"
                style={{
                  fontSize: "350%",
                }}
              ></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="category-inputc-col">
            <input
              type="text"
              placeholder="Search"
              className="category-input"
              value={searchTerm}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Container>
      <Container className="card-con" fluid>
        <Row>
          {searchResults.map((joke) => {
            return (
              <Col className="card-col" md={{ span: 10, offset: 1 }}>
                <div class="card">
                  <img
                    src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no"
                    alt="Person"
                    class="card__image"
                  />
                  <p class="card__name">{joke.JokeName}</p>
                  <p class="card__content">{joke.Joke}</p>

                  <a class="btn draw-border">
                    <i
                      class="far fa-grin-squint-tears"
                      style={{
                        fontSize: "250%",
                      }}
                    ></i>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
