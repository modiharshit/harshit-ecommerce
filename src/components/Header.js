
import {
  Button,
  Container,
  Form,
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
    <Navbar bg="light" variant="light" expand="lg" style={{ height: 80, maxHeight: '300px' ,  backgroundColor:"red" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Harshit's Store</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '300px' }}
          navbarScroll>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          <Nav.Link as={Link} to={"/paymentpolicy"}>Payment</Nav.Link>
          <Nav.Link as={Link} to={"/returns"}>Returns</Nav.Link>
        </Nav>
        </Navbar.Collapse>

        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search" style={{marginRight: 10}}>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search product"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}/>
            </Form>
            
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
