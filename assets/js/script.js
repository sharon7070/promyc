
// contact validation start
$(document).ready(function () {
    console.log("jQuery loaded:", $.fn.jquery);
    console.log("jQuery Validation Loaded:", $.validator);
  
    $("#contactform").validate({
      rules: {
        fullname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phoneUS: true
        },
        subject: {
          required: true,
          minlength: 3
        },
        message: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        fullname: {
          required: "Please enter your full name",
          minlength: "Your full name must consist of at least 3 characters"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        phone: {
          required: "Please enter your phone number",
          phoneUS: "Please enter a valid phone number"
        },
        subject: {
          required: "Please enter a subject",
          minlength: "Subject must be at least 3 characters"
        },
        message: {
          required: "Please enter a message",
          minlength: "Your message must be at least 5 characters"
        }
      },
      submitHandler: function (form) {
        console.log("Form is valid, submitting...");
        form.submit();
      }
    });

    $.validator.addMethod("phoneUS", function (value, element) {
      return this.optional(element) || /^[\+]?[0-9]{1,4}?[-\s\./0-9]*$/.test(value);
    }, "Please enter a valid phone number.");
  });
//   contact validation end


// header animation start
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const logo = document.querySelector(".navbar-brand img");

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      logo.style.filter = "invert(1)";
    } else {
      navbar.classList.remove("scrolled");
      logo.style.filter = "invert(0)";
    }
  });
// header animation end