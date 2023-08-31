import React from "react";

import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";







function Hero(params) {
 
  
  return (
    <div className="container-fluid d-lg-flex">
      <div className="container ">
        <h1 className={`fw-bold  display-3`}>
          We Build, Operate, <br /> Transform your <br /> businesses{" "}
          <span className="gradient-textbody fw-bolder">Digitally</span>
        </h1>
        <div className="col">
          
            <h3 className="py-4">
              Take charge of your business continuity <br /> with innovative IT
              solutions
            </h3>
          
        </div>
        <div className="mt-5">
          <Button variant="dark" className="me-2 p-2 ">
            Schedule a Free Consultation
          </Button>
          <Button variant="secondary" className="p-2">
            Services
          </Button>
        </div>
      </div>
      <div className="shadow border mt-4 p-4 ">
        <Form >
          <h4 className="fw-bold">Get a Quote from our experts.</h4>
          <p className="py-2">
            Find the services you need and receive quotes from our team of
            Specialists.
          </p>
          <InputGroup className="my-4 py-2">
          <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
            {/* <FormControl
              placeholder="Search Services"
              aria-label="Search"
              className="py-3"
            ></FormControl> */}
            <Form.Select aria-label="Default select example" className="py-3" placeholder="Search Services">
      <option>search services</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

          </InputGroup>
          <InputGroup className="my-4 py-2">
          <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
            <FormControl placeholder="9999999999" aria-label="number" className="py-3" />
            
          </InputGroup>
          <div className=" py-2 text-center ">
            <span>
            <Button variant="dark" className="p-2 px-3">
              Submit and Next
            </Button>
            </span>
          </div>
          <div className="d-flex mb-2 pt-4 text-center">
            <div className="d-flex px-5">
              <h1 className="px-2">
                <i class="bi bi-buildings"></i>
              </h1>
              <p>
                <span className="fw-bolder">1000</span> <br /> Clients
              </p>
            </div>
            <div className="d-flex border-start border-dark px-5">
              <h1 className="px-2 fw-bold">
                <i class="bi bi-people" />
              </h1>
              <p>
                <span className="fw-bolder">1000</span> Agencies
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Hero;
