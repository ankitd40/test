// EmailJS contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_obb7rjl",   
    "template_qcop77y",  
    this,
    "OBC1K-NrmDWrrPHJB"  
  )
  .then(() => {
      alert("Message sent successfully!");
      form.reset();
  })
  .catch((error) => {
      alert("Failed to send message: " + JSON.stringify(error));
  });
});
