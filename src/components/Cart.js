import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart">
      <div className="productContainer container-fluid content-align">
        <Row>
          <Col xs={12}>
          <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={1}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={4}>
                  <span>{prod.description}</span>
                </Col>
                <Col md={1}><b>$ {prod.price} </b></Col>
                <Col md={1}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={1}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }>
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
          </Col>
        </Row>
        <Row>
        <Col xs={12}>
            <div>
              <span className="title">Subtotal ({cart.length}) items</span>
              <br></br>
              <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {Math.round(total)}</span>
              <br></br>
              <Button type="button" disabled={cart.length === 0}>
                Proceed to Payment
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
