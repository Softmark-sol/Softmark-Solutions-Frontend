import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "../css/Plans.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Plans() {
  const plans = [
    {
      name: "Basic",
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
    <div className="plans-container container">
      {plans.map((plan, index) => (
        <Card className={`plan-card plan-card-${index}`} key={index}>
          <CardActionArea>
            <CardContent>
              <div className="plans-cont">
                <div className="plan-header">
                  <span className="plan-title">{plan.name}</span>
                  <span className="plan-price">{`$${plan.price}/mo`}</span>
                  <button className="select-button">START YOUR PLAN</button>
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
  );
}