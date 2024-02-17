import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchQueryAction } from "../redux/actions/searchQueryAction";
import { SEARCH_QUERY_RESET } from "../redux/actions/actionTypes";
const Header = () => {
  const dispatch = useDispatch();

  const handelValueChange = (event) => {
    const value = event.target.value;
    if (value) {
      dispatch(searchQueryAction(value));
    } else {
      dispatch({ type: SEARCH_QUERY_RESET });
    }
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="md">
      <Container fluid className="px-4">
        <Navbar.Brand>
          <h3 className="m-0">Team</h3>
        </Navbar.Brand>
        <Navbar>
          <div className="d-flex align-items-center search">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search"
              onChange={handelValueChange}
            />
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Header;
