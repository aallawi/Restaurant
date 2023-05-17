import React from "react";

import "./Suggestion.css";
import { images } from "../../constants";

const Suggestion = () => (
  <div className="suggestion bg_black">
    <div className="suggestion_input">
      <div>
        <label for="fname">Full Name</label>
        <input
          type="text"
          id="fname"
          name="fulltname"
          placeholder="Your name.."
        />
      </div>
      <div>
        <label for="email">Email Adress</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Your Message.."
        />
      </div>
      <button className="custom_button">Subscribe</button>
    </div>

    <div className="suggestion_photo">
      <img src={images.laurels} alt="suggestion_photo" />
    </div>
  </div>
);

export default Suggestion;
