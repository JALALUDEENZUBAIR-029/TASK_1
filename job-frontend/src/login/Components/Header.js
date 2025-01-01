import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className=" text-primary font-italic " href="/login">
            <span className="d-flex">
              <i
                className="bi bi-search"
                style={{ fontSize: "1.75rem", margin: "0px 6px" }}
              ></i>
              <h1>JOBHUNT </h1>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
