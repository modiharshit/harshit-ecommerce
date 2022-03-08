import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="light" variant="light" expand="lg" style={{ height: 80, backgroundColor:"red" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Harshit's Store</Link>
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
        
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/returns"}>Returns</Nav.Link>
        </Nav>
        </Navbar.Collapse>

        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search" style={{marginRight: 10}}>
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
        <Link to="/cart">
          <Button style={{ width: "95%", margin: "0 10px" }}>
            Proceed to checkout
          </Button>
        </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
