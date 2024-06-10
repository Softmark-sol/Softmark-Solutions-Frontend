import * as React from "react";
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "../css/Plans.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Plans() {

  const [show, setShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedPlan(null); // Clear selected plan when closing modal
  };

  const handleShow = (plan) => {
    setSelectedPlan(plan); // Set selected plan when opening modal
    setShow(true);
  };

  const plans = [
    {
      name: "Basic",
      formName:"Basic Plan",
      // price: 0,
      features: [
        "Functional website",
        "1 page",
        "5 plugins/extensions",
        "Payment processing",
        "Hosting setup"
      ]
    },
    {
      name: "Standard",
      formName:"Standard Plan",
      // price: 0,
      features: [
        "Functional website",
        "5 page",
        "Content upload",
        "8 plugins/extensions",
        "E-commerce functionality",
        "5 products",
        "Payment processing",
        "Speed optimization",
        "Hosting setup",
        "Social media icons"
      ]
    },
    {
      name: "Premium",
      formName:"Premium Plan",
      // price: 0,
      features: [
        "Functional website",
        "10 page",
        "Content upload",
        "8 plugins/extensions",
        "E-commerce functionality",
        "10 products",
        "Payment processing",
        "Opt-in form",
        "Autoresponder integration",
        "Speed optimization",
        "Hosting setup",
        "Social media icons",
      ]
    }
  ];

  return (
    <>
      <div className="plans-container container">
        {plans.map((plan, index) => (
          <Card className={`plan-card plan-card-${index}`} key={index}>
            <CardActionArea>
              <CardContent>
                <div className="plans-cont">
                  <div className="plan-header">
                    <span className="plan-title">{plan.name}</span>
                    <span className="plan-price">{`$${plan.price}/mo`}</span>
                    <button className="select-button" onClick={() => handleShow(plan)}>START YOUR PLAN</button>
                  </div>
                  <div className="plan-features-container">
                    <ul className="plan-features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fa fa-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlan ? selectedPlan.formName : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#4599B4'}}  onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'#4599B4'}} onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
