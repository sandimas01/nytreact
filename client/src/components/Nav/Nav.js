import React from "react";
import { Container } from "../Grid";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Container>
    <a className="navbar-brand" href="/">
      NY Times Scraper Home
    </a>
    <a className="navbar-brand" href="/saved">
      Saved Articles
    </a>
    </ Container>
  </nav>
);

export default Nav;
