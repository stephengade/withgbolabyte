import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import design from "./Contact.module.css";
const submit_API =
  "https://formeezy.com/api/v1/forms/61ce3a22fd92ea0008fc48a3/submissions";

function Contact() {
  // Form Initial State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [title, setTitle] = useState("");

  // Handle Submit

  function SubmitHandler(e) {
    e.preventDefault();

    // fetch({submit_API}, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   });

    const data = {
      email,
      message,
      budget,
      message,
      title,
      name,
    };

    const config = {
      method: "POST",
      body: JSON.stringify(data),
    };

    fetch(submit_API, config)
      .then(async (response) => {
        const { redirect } = await response.json();
        window.location.href = redirect;
      })
      .catch((error) => console.warn(error.responseText));

    console.log(data);
  }

  return (
    <>
      <section className={`${design.Contact_container} container-fluid`}>
        <div className={`${design.contact_intro} row`}>
          <div className={`${design.contact_wrapper} col-12`}>
            <p className={design.contact_info}>Together, we can so much 👌</p>
            <h2 className={design.contact_text}>Get in touch</h2>
          </div>

          <div className={design.contact_details}>
            <p className={design.contact_data}>hello@gbolabyte.com</p>
            <p className={design.contact_data}>+234 (0) 81 6454 0355</p>
            <p className={design.contact_data}>TW, FB, IG: @Gbolabyte</p>

            <p className={`mt-5 ${design.contact_data}`}>
              LOCATION: <span style={{ opacity: ".8" }}> Remote</span>
            </p>
          </div>
        </div>

        <div className={`${design.contact_form} row`}>
          <h2
            style={{
              textAlign: "center",
              margin: "2rem auto",
              color: "var(--white)",
              fontFamily: "var(--dm",
            }}
          >
            Tell us what you need, we will reply as soon as possible...
          </h2>
          <div className="col-12">
          <form method="POST" action="https://api.slapform.com/QbOYqtpdD">
            <input
              type="email"
              placeholder="Email Address"
              required
              className={design.contact_form_input}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Name"
              required
              className={design.contact_form_input}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Project Title"
              required
              className={design.contact_form_input}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              maxLength={10}
              type="number"
              placeholder="What's Your Budget? (USD)"
              required
              className={design.contact_form_input}
              name="budget"
              onChange={(e) => setBudget(e.target.value)}
            />

            <textarea
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="In few words, tell us what you need?"
              required
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className={design.contact_form_submit}>
              Submit
            </button>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
