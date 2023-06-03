import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Button from "react-bootstrap/Button";
const Header = ({ getTabName = () => {}, getSearchKey = () => {} }) => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">MOVIE DB</Navbar.Brand>
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

          <input
            type="text"
            placeholder="Search.."
            name="search2"
            className="search-input"
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
          />
          <Button
            className="search-submit"
            variant="outline-light"
            onClick={(e) => getSearchKey(searchKey)}
          >
            <i class="fa fa-search" />
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
