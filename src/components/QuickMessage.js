import React, { useState } from "react";

function QuickMessage({ inquiry }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission goes here
  const submitForm = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div
      className="container bg_color col-lg-9"
      style={{
        border: "#002664 2px solid",
        padding: "15px",
        borderRadius: "10px",
        margin: "50px auto",
        // backgroundColor: "black",
      }}
    >
      <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
        {inquiry}
      </h2>
      <form
        onSubmit={submitForm}
        className="contact_form_box"
        method="post"
        id="contactForm"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group text_box">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group text_box">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group text_box">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group text_box">
              <textarea
                onChange={handleChange}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message . . ."
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn_three">
          Send Message
        </button>
      </form>
      {/* Additional UI components for success/error messages */}
      <div id="success">Your message successfully sent!</div>
      <div id="error">Oops! There is something wrong. Please try again.</div>
    </div>
  );
}

export default QuickMessage;
