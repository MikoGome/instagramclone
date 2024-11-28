document.querySelectorAll("input").forEach(element => {
  element.addEventListener("input", () => {
    if(document.getElementsByTagName("input")[0].value.length > 0 && document.getElementsByTagName("input")[1].value.length > 5) {
      document.getElementsByTagName("button")[0].style.opacity = "1";
      document.getElementsByTagName("button")[0].style.cursor = "pointer"
    }
    else {
      document.getElementsByTagName("button")[0].style.opacity = "0.5";
      document.getElementsByTagName("button")[0].style.cursor = "auto"
    }
  });
});

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  const user = ["username", "phone number", "email"];
  if(user.includes(document.getElementsByTagName("input")[0].value.toLowerCase()) && document.getElementsByTagName("input")[1].value.toLowerCase() === "password") {
    window.location.href = "./feed.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
});

document.querySelectorAll("input").forEach(element => {
  element.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === "NumpadEnter") document.getElementsByTagName("button")[0].click();
  });
});

document.querySelectorAll("input").forEach(element => {
  element.addEventListener("focus", () => {
    element.style.borderColor = "#a8a8a8";
  });
  element.addEventListener("blur", () => {
    element.style.borderColor = "#dbdbdb";
  });
});