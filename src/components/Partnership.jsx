import sales from "../assets/images/sales.png";
import microsoft from "../assets/images/microsoft.png";
import aws from "../assets/images/aws.png";
import google from "../assets/images/google.png";
import mule from "../assets/images/mule.png";
import React from "react";

const Partnership = () => {
  return (
    <section className="partnership">
      <div className="partnership__image-container">
        <div className="partnership__header">
          <h2 className="partnership__title">Our partnerships</h2>
        </div>
        <div className='partnership__image-group'>
          <img src={sales} alt="sales" className="partnership__image"/>
          <img src={microsoft} alt="microsoft" className="partnership__image"/>
          <img src={aws} alt="aws" className="partnership__image"/>
          <img src={google} alt="google" className="partnership__image"/>
          <img src={mule} alt="mule" className="partnership__image"/>
        </div>
      </div>

    </section>
  );
};
export default Partnership;