import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Button from "react-bootstrap/Button";
const Header = ({ getTabName = () => {} }) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => getTabName("top_rated")}>
              Top rated
            </Nav.Link>
            <Nav.Link onClick={() => getTabName("popular")}>Popular</Nav.Link>
            <Nav.Link onClick={() => getTabName("now_playing")}>
              Now Playing
            </Nav.Link>
            <Nav.Link onClick={() => getTabName("upcoming")}>Upcoming</Nav.Link>
          </Nav>
          <form class="example" className="search-form">
            <input
              type="text"
              placeholder="Search.."
              name="search2"
              className="search-input"
            />
            <Button
              type="submit"
              className="search-submit"
              variant="outline-light"
            >
              <i class="fa fa-search" />
            </Button>
          </form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
