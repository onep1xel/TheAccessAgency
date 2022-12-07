---
layout: blocks
title: Lorem ipsum is placeholder text commonly used
url: ""
description:
image:
navbar:
  background: "#1d2838"
  color: light # dark light (default light)
download:
  text: Download checklist (94kb, PDF)
  url: "#"
blocks:
- block: header
  background:  "#253148"
  color: light # light dark muted
  heading: Contact details
  text:

- block: text
  background:  "#EFEFEF"
  content: |-
        ## Tell us a bit about you and your project for better customer experience.

        (We'll get back to you soon and you won't go onto any shady email lists)

- block: code
  background:  "#dedede"
  padding: bottom top
  content: |-
      <form action="https://getform.io/f/1512ba6c-05c0-40ee-9b67-eb3e78da2878" method="POST">

      <label for="first_name">Enter your first name</br>
      <input type="text" name="first_name" placeholder="First name" size="45" class="contact-text-input"></label></p>

      <label for="last_name">..and your last name</br>
      <input type="text" name="last_name" placeholder="Last name" size="45" class="contact-text-input"></label></p>

      <label for="email">Enter your email</br>
      <input type="email" name="email" placeholder="yourname@youremail.com" size="45" class="contact-text-input"></label></p>


      <!-- add hidden Honeypot input to prevent spams -->
      <input type="hidden" name="_gotcha" style="display:none !important">

      <label for="text-area">Tell us about your journey to better access:</br>
      <textarea name="comment" rows="4" cols="45" placeholder="Describe your project and how better access and information can help..." class="contact-text-input"></textarea><br>

      <!-- select field handle -->

      When do you want a callback?</br>
      <select name="callback">
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
      </select><p>

      <button type="submit" class="button2">Send</button>
      </form>

      <p>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/the-access-agency/initial-consult'});return false;">Schedule a free 15 minute chat with Calendly</a>



- block: code
  background:  "#EFEFEF"
  padding: bottom
  content: |-
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/the-access-agency/initial-consult'});return false;">Don't want to email? Why not schedule a free 15 minute chat?</a>




- block: cta
  background:  "#8fc8b5"
  color: dark # light dark muted
  heading: Contact us to find out more about how to communicate your access
  text: Lorem ipsum dolor sit amet, consectetuer adipiscing elitiam.
  button:
    style: whale # whale mint sand
    text: Return to the portfolio
    url: "#"

---
