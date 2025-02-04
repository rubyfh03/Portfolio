const contactform = document.querySelector('.contact-form');
const container = document.querySelector('.navi-container');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	container.innerHTML = '<br><br><br><br><br><p>Thanks for your message. <br><br /> I\'ll respond to you shortly</p><br><br><br><br><br>';
});

const connectbtn = document.querySelector('.connect-btn');
const crossbtn = document.querySelector('.cross-btn');
const socialcontainer = document.querySelector('.social-container');

connectbtn.addEventListener('click', () => {
	socialcontainer.classList.toggle('visible')
});

crossbtn.addEventListener('click', () => {
	socialcontainer.classList.remove('visible')
});

import { Analytics } from "@vercel/analytics/react";

// Initialize EmailJS
emailjs.init('OBq6kyEnWFiG6Vg1jNca6');
// Function to send email (using EmailJS)
function sendEmail(formData) {
	emailjs.sendForm('service_htha5sj', 'template_gindywh', formData)
	  .then((response) => {
		console.log('Email sent successfully', response);
	  }, (error) => {
		console.error('Error sending email', error);
	  });
  }