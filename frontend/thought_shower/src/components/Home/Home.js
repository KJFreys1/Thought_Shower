import React from "react";
import "./Home.css";
import TitleView from "../TitleView/TitleView";
import { Link } from "react-router-dom";


import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="homeBody">
      <Jumbotron fluid className="intro">
        {/* <Container className="intro"> */}
          <h1 className="jumboTitle">Fluid jumbotron</h1>
          <p className="jumboPara">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        {/* </Container> */}
      </Jumbotron>
      <Card className="cardDiv">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary" block>
            Create!
          </Button>
        </Card.Body>
      </Card>
      <br/>
      <br/>
      <Card className="cardDiv">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link to={"/thoughts/"}>
            <Button variant="primary" block>
              Browse
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
