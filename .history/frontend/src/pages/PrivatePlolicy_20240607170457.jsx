import React from "react";
import { Helmet } from "react-helmet-async";

const PrivatePlolicy = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title> Private Policy</title>
          </Helmet>
          <div className="site-container">
          <article className="private">
          <h3>SECTION 1 - ONLINE STORE TERMS</h3>
          <p>
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your place of residence, or that you
            are the age of majority in your place of residence and you have
            given us your consent to allow any of your minor dependents to use
            this site. You may not use our products for any illegal or
            unauthorized purpose nor may you, in the use of the Service, violate
            any laws in your jurisdiction (including but not limited to
            copyright laws). You must not transmit any worms or viruses or any
            code of a destructive nature. A breach or violation of any of the
            Terms will result in an immediate termination of your Services.
          </p>
        </article>
          </div>
    </div>
  );
};

export default PrivatePlolicy;
