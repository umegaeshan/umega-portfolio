import "./Contact.css";

import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailSubject = encodeURIComponent(
      subject || `Portfolio Message from ${name}`
    );

    const emailBody = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
    );

    window.location.href =
      `mailto:umegaeshan@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };


  return (
    <section className="contact" id="contact">

      <div className="contact-container reveal">

        {/* HEADING */}

        <div className="section-heading">

          <p>Let's Connect</p>

          <h2>
            Contact <span>Me</span>
          </h2>

        </div>


        <p className="contact-intro">
          Have a project idea, opportunity, question or just want to
          connect? Feel free to reach out to me.
        </p>


        <div className="contact-content">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <h3>Let's Talk</h3>

            <p className="contact-description">
              I'm always interested in learning new things, working on
              projects and connecting with people in technology.
            </p>


            {/* EMAIL */}

            <a
              href="mailto:umegaeshan@gmail.com"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>

                <h4>
                  umegaeshan@gmail.com
                </h4>
              </div>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/umega-eshan-6baa06356"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <span>LinkedIn</span>

                <h4>
                  Umega Eshan
                </h4>
              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/umegaeshan"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>

                <h4>
                  @umegaeshan
                </h4>
              </div>

            </a>

          </div>


          {/* RIGHT SIDE - FORM */}

          <div className="contact-form-container">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="send-button"
              >
                Send Message

                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;