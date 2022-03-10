import { Button, Col, Form, Row } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { sort, byMobile, byLaptop },
  } = CartState();

  // make state for rating

  return (
   
   
    <div className="filters content-align">
      <Row>        
       <Col xs={4}>
       
       <div className="w-136p">
        <Form.Check
          inline
          label="Low To High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </div>
      <div className="w-136p">
        <Form.Check
          inline
          label="High To Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </div>
       </Col>
       <Col xs={4}>
       <div>
        <Form.Check
          inline
          label="Mobile"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_MOBILE",
            })
          }
          checked={byMobile}
        />
      </div>
      <div>
        <Form.Check
          inline
          label="Laptop"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_LAPTOP",
            })
          }
          checked={byLaptop}
        />
      </div>

      
       </Col>
       <Col xs={4}>
       <Button variant="light"
          onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }>
        Clear Filters
      </Button>
        </Col>
    </Row>
    </div>
  );
};

export default Filters;
