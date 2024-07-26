import React from "react";

const SoftwareCards = () => {
  return (
    <div  className="container cards-container-csd">
      <div className="csd-single-card container" >
        <h5
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px", fontSize: "1.5rem" }}
        >
          Why SoftMark Solutions is the Trusted Custom Software Development
          Company?
        </h5>
        <p style={{ textAlign: "left", paddingTop: "20px", fontSize: "1rem" }}>
          At SoftMark Solutions, our IT professionals are experts in providing
          bespoke programming and software development solutions. We have a
          global tech talent pool with expertise in all technological solutions,
          including CMS, Blockchain, cloud-based development, SaaS, etc. Our
          diverse workforce has the expertise to leverage technologies and stay
          ahead of the competition. Thus, your business can rest assured that
          your software development needs are in capable hands.
        </p>
      </div>

      <div className="csd-single-card container" style={{height: "35rem"}}>
        <h5
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px", fontSize: "1.5rem" }}
        >
          Quality Product
        </h5>
        <p style={{ textAlign: "left", paddingTop: "20px", fontSize: "1rem" }}>
        Our team of proficient experts guarantees the delivery of products with superior craftsmanship, ensuring they align precisely with your business requirements.
        </p>
        <h5
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px", fontSize: "1.5rem" }}
        >
          Latest Technology Stack
        </h5>
        <p style={{ textAlign: "left", paddingTop: "20px", fontSize: "1rem" }}>
        We stay at the forefront of all technological advancements to empower your business with cutting-edge technological solutions.
        </p>
      </div>
      
      <div className="csd-single-card container" style={{height: "35rem"}}>
        <h5
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px", fontSize: "1.5rem" }}
        >
          Quick Development
        </h5>
        <p style={{ textAlign: "left", paddingTop: "20px", fontSize: "1rem" }}>
        SoftMark Solutions’ agile and swift development processes provide businesses with streamlined and efficient development processes to cater to their needs.        </p>
        <h5
          style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px", fontSize: "1.5rem" }}
        >
          Complete Transparency
        </h5>
        <p style={{ textAlign: "left", paddingTop: "20px", fontSize: "1rem" }}>
        Starting from project initiation and extending to final project delivery, our commitment to transparency fosters strong client partnerships.        </p>
      </div>
    </div>
  );
};

export default SoftwareCards;
