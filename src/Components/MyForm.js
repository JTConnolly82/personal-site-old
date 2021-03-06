import React from 'react';
import './MyForm.css';

const MyForm = () => (
  <div id="page">
    <form class="MyForm" action="https://formspree.io/jtconnolly82@gmail.com" method="POST" id="contact-form" method="post" role="form">
      <fieldset>
        <label for="name">Name &#42;</label>
        <input id="name" name="name" type="text" placeholder="Your name" required="required" />
        <label for="email">Email &#42;</label>
        <input id="email" name="email" type="text" placeholder="Your email" required="required" />
        <label for="message">Message &#42;</label>
        <textarea id="message" name="message" placeholder="Enter your message here" rows="3" required="required"></textarea>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  </div>
)

export default MyForm;