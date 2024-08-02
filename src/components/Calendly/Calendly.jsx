import React from "react";
import { InlineWidget } from "react-calendly";
import "../../css/calendly.css"

const Calendly = () => {
  return (
    <div className="calendly" aria-label="Schedule a meeting">
      <InlineWidget url="https://calendly.com/admin-softmarksolutions" />
    </div>
  );
};



export default Calendly;
