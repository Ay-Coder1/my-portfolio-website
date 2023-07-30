import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiVideoChatFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvf6ttk",
        "template_3rpvucr",
        form.current,
        "WRzR24HI5iPcEk6oA")
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>
              ayomidebabarinde07 <br />
              @gmail.com
            </h5>
            <a href="mailto:ayomidebabarinde07@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiVideoChatFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Oluwasegun</h5>
            <a href="https://web.facebook.com/Haywhy.coder" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+234 9066435738</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2349066435738"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact