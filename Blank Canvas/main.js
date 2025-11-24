// Section toggle
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

// Menu toggle
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "none" ? "block" : "none";
}

// Dynamic greeting
document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  let greeting = "Welcome to Blank Canvas!";
  if (hour < 12) greeting = "Good Morning, art lover!";
  else if (hour < 18) greeting = "Good Afternoon, creator!";
  else greeting = "Good Evening, visionary!";
  document.getElementById("greeting").textContent = greeting;
});

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signUpBtn").onclick = function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert("Signed up successfully!");
    }
  };

  document.getElementById("loginBtn").onclick = function () {
    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    if (!loginEmail || !loginPassword) {
      alert("Please enter your login credentials.");
    } else {
      alert("Logged in!");
    }
  };

 const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const forms = [signupForm, loginForm].filter(Boolean);

  forms.forEach(form => {
    const inputs = Array.from(form.querySelectorAll("input"));
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        removeHighlights(forms);
        input.style.backgroundColor = '#f6f4f0';
      });
      input.addEventListener("blur", () => {
        input.style.backgroundColor = '';
      });
    });
  });

  function removeHighlights(formsArray) {
    formsArray.forEach(f => {
      f.querySelectorAll("input").forEach(i => {
        i.style.backgroundColor = '';
      });
    });
  }
});