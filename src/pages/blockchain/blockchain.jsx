import React from "react";
import ServiceForm from "../../components/ServiceForm";
import BlockchainLottieAnimation from "../../components/BlockchainAnimation";
import Typewriter from "../../components/TypeWriter";
import BlockchainCards from "../../components/BlockchainCards";
import ConsultationBanner from "../../components/consultationBanner/consultationBanner";
import MoreServices from "../../components/moreServices/moreServices";
import ContactForm from "../../components/ContactForm";
import WhyBlockchainLottieAnimation from "../../components/whyBlockChainAnimation";

const BlockChain = () => {
  return (
    <>
      <ServiceForm
        title={"Best Blockchain Development Services"}
        description={
          "Our blockchain development services include creating secure, scalable solutions like smart contracts, DApps, and blockchain integrations. We ensure efficiency, transparency, and innovation tailored to your business needs."
        }
        buttonText={"Get In Touch"}
        route={"contactUs"}
      />

      <div className="main-container container">
        <h2>
          SoftMark Solutions -{" "}
          <Typewriter
            strings={["Unlocking the Future with Decentralized Solutions"]}
          />
        </h2>
        <div className="horizontal-fram-web">
          <h5 className="sub-paragraph">
            At SoftMark Solutions, we understand the transformative potential of
            blockchain technology for businesses. Our expert team specializes in
            developing secure, scalable, and innovative blockchain solutions,
            from smart contracts to decentralized applications (DApps). Whether
            you're exploring blockchain integration or launching a
            blockchain-powered product, we are committed to delivering solutions
            that drive transparency, efficiency, and trust in the digital age.
          </h5>
          <div className="webanimation">
            <BlockchainLottieAnimation />
          </div>
        </div>
      </div>
      <div className="upcards">
        <BlockchainCards />
      </div>

      <div className="howWeDo container">
        <div className="HowWeDoPara">
          <h1 className="head">Why Blockchain is the Future of Business?</h1>
          <span className="sp1">
            Blockchain offers unparalleled security, transparency, and
            efficiency. By decentralizing data storage, it reduces fraud and
            ensures trust, as all transactions are recorded on an immutable
            ledger. This technology streamlines operations, cuts costs, and
            enables automated, trustless transactions through smart contracts.
            Blockchain is reshaping industries by providing a more secure,
            transparent, and cost-effective way to manage data and transactions,
            driving innovation across sectors.
          </span>
        </div>
        <div className="HowWeDoImg">
          <WhyBlockchainLottieAnimation />
        </div>
      </div>

      <ConsultationBanner />
      <MoreServices />
      <ContactForm />
    </>
  );
};

export default BlockChain;
