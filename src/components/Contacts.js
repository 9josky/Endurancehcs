import React, { useState } from "react";

function Contacts() {
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
    <section className="contact_info_area sec_pad bg_color">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info_item">
              <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                Office Address
              </h6>
              <p className="f_400 f_size_15">9310 Daly CT Laurel, MD 20723</p>
            </div>
            <div className="contact_info_item">
              <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                Contact Info
              </h6>
              <p className="f_400 f_size_15">
                <span className="f_400 t_color3">Phone:</span>{" "}
                <a href="tel:3024437488">(204) 564 0051 </a>
              </p>
              {/* <p className="f_400 f_size_15">
                <span className="f_400 t_color3">Fax:</span>{" "}
                <a href="tel:3024437488">(+096) 204 353 6684</a>
              </p> */}
              <p className="f_400 f_size_15">
                <span className="f_400 t_color3">Email:</span>{" "}
                <a href="mailto:saasland@gmail.com">ehcsonline1@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact_form col-lg-9">
            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
              Leave a Message
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
            <div id="error">
              Oops! There is something wrong. Please try again.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
