import React, { useEffect, useRef } from "react";
import "../css/barchart.css";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const bars = chartRef.current.querySelectorAll(".bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const percentage = bar.getAttribute("data-percentage");
              bar.style.height = percentage;
            });
          } else {
            bars.forEach((bar) => {
              bar.style.height = "0";
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the chart is in view
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="chart" ref={chartRef}>
      <div className="bar" data-percentage="16%">
        Jan
      </div>
      <div className="bar" data-percentage="21%">
        Feb
      </div>
      <div className="bar" data-percentage="38%">
        Mar
      </div>
      <div className="bar" data-percentage="72%">
        Apr
      </div>
      <div className="bar" data-percentage="89%">
        May
      </div>
      <div className="bar" data-percentage="95%">
        June
      </div>
    </div>
  );
};

export default BarChart;
