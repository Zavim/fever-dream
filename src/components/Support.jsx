import React from "react";
import support from "/images/support.png";

export default function Support() {
  // const $form = $("form#contact-form"),
  //   url =
  //     "https://script.google.com/macros/s/AKfycbyqGigWGpmqBZxbyn9U3zo6WKJQn6bZiPhtUeGXMG9MiLNLdLUKrSXBbxUlmdSPoV2D_A/exec";

  // $("#submit-form").on("click", function (e) {
  //   e.preventDefault();
  //   const jqxhr = $.ajax({
  //     url: url,
  //     method: "GET",
  //     dataType: "json",
  //     data: $form.serializeObject(),
  //   }).success(
  //     // do something
  //     console.log("submitted")
  //   );
  // });
  return (
    <>
      <nav className="container">
        <nav className="contact-container">
          <nav className="contact-container-text">
            <h2>contact</h2>
            <p>
              Keep up to date with <br />
              feverdream by filling out
              <br />
              the simple contact form <br /> below to join our email list.{" "}
              <br />
              <br />
              For assistance please email <br />
              <span className="email">
                <strong> hello@feverdream.co</strong>
              </span>
            </p>
            <form action="" className="contact-form" id="contact-form">
              <div>
                <label>
                  First Name <span className="asterisk">*</span>
                  <br />
                  <input type="text" name="first-name" />
                </label>
              </div>
              <div>
                <label>
                  Last Name <span className="asterisk">*</span>
                  <br />
                  <input type="text" name="last-name" />
                </label>
              </div>
              <div>
                <label>
                  Email <span className="asterisk">*</span>
                  <br />
                  <input type="text" name="email" />
                </label>
              </div>
              <button className="" id="submit-form" type="submit">
                Submit
              </button>
            </form>
          </nav>
          <nav className="contact-img-container">
            <img src={support} alt="placeholder"></img>
          </nav>
        </nav>
      </nav>
    </>
  );
}
