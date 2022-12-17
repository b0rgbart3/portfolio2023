import React from "react";
import { Col, Row, Container } from "../components/grid";


import { useRouteError } from "react-router-dom";

export default function NoMatch() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* <Jumbotron> */}
            <h1>404 Page Not Found -</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <h2>We're sorry - that page is not available.</h2>
          {/* </Jumbotron> */}
        </Col>
      </Row>
    </Container>
  );
};

