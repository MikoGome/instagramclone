document.querySelector("input").addEventListener("focus", () => {
  document.getElementsByTagName("img")[1].style.display = "none";
  document.getElementsByTagName("input")[0].style.paddingLeft = "10px";
  document.getElementsByTagName("input")[0].select();
  document.getElementsByTagName("input")[0].style.color = "#262626";
  document.getElementsByTagName("img")[2].style.display = "block";
});

document.getElementsByTagName("img")[2].addEventListener("mousedown", (event) => {
  document.getElementsByTagName("input")[0].value = "";
});

document.querySelector("input").addEventListener("blur", () => {
  document.getElementsByTagName("img")[1].style.display = "block";
  document.getElementsByTagName("input")[0].style.paddingLeft = "20px";
  document.getElementsByTagName("input")[0].style.color = "#8e8e8e";
  document.getElementsByTagName("img")[2].style.display = "none";
});

fetch("https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images")
  .then(res => res.json())
  .then(data => {
    data.forEach((element, index) => {
      if(element.startsWith("http://www.fakeurl.io/")) return;
      const post = document.createElement("div");
      post.setAttribute("class", "post");
      const image = document.createElement("img");
      image.setAttribute("src", element);
      image.setAttribute("draggable", false);
      image.setAttribute("class", "picture");
      post.innerHTML = `<div class='userInfo'><img class='feedProfile' src='https://th.bing.com/th/id/R.c7b7adb352f100c618bc4e1ff17285ec?rik=2A8eYsGVuRHvWw&riu=http%3a%2f%2fletsplaymancala.com%2fimg%2favatar_silhouette.png&ehk=DWO60tNmETRTbiX0ijo%2fjO2XS7WcAk79RTecWsv5vPc%3d&risl=&pid=ImgRaw&r=0'><p>username${Math.floor(Math.random()*100)}</p><img class="periods" src="https://webstockreview.net/images/dot-clipart-period-punctuation-16.png"></div>`
      post.appendChild(image);
      const buttonz = document.createElement("div");
      buttonz.setAttribute("class", "buttonz");
      buttonz.innerHTML = "<img class='heart' src='https://res.cloudinary.com/miko2/image/upload/v1639885837/heart_ri9t4b.png'><img class='bubble' src='https://www.clipartkey.com/mpngs/m/57-579573_speech-bubble-comment-icon-instagram-png.png'><img class='plane' src='https://res.cloudinary.com/miko2/image/upload/v1639885722/plane_yldml4.png'><img class='bookmark' src='https://cdn4.iconfinder.com/data/icons/basic-ui-22/32/37-_bookmark-save-marking-UI-512.png'>"
      post.appendChild(buttonz);
      const commentList = document.createElement("ul");
      commentList.setAttribute("class", "commentList");
      commentList.innerHTML = `<li class="likes"><strong class="insideLikes">${Math.floor(Math.random() * 200)} likes</strong></li>`
      post.appendChild(commentList);
      const commentWriteBox = document.createElement("div");
      commentWriteBox.setAttribute("class", "commentWriteBox");
      const smiley = document.createElement("img");
      smiley.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/ui-line-pixel-perfect-1/32/ui_line_smile_media_ui-512.png");
      smiley.setAttribute("class", "smiley");
      commentWriteBox.appendChild(smiley);
      const commentWrite = document.createElement("input");
      commentWrite.setAttribute("class", "commentWrite");
      commentWrite.setAttribute("placeholder", "Add a comment...");
      commentWriteBox.appendChild(commentWrite);
      const sendButton = document.createElement("button");
      sendButton.setAttribute("class", "sendButton");
      sendButton.innerHTML = "Post";
      commentWriteBox.appendChild(sendButton);
      post.appendChild(commentWriteBox);
      document.getElementById("posts").appendChild(post);
    });
  })
  .then( () => {
    document.querySelectorAll(".commentWrite").forEach((element, index) => {
      element.addEventListener("input", () => {
        if(element.value.length > 0) {
          document.getElementsByClassName("sendButton")[index].style.color = "0095f6";
          document.getElementsByClassName("sendButton")[index].style.cursor = "pointer";
        } else {
          document.getElementsByClassName("sendButton")[index].style.color = "#b1defc";
          document.getElementsByClassName("sendButton")[index].style.cursor = "auto";
        }
      });

      element.addEventListener("keypress", (e) => {
        if(e.key === "Enter" || e.key === "NumpadEnter") {
          document.getElementsByClassName("sendButton")[index].click();
        }
      });
    });

    document.querySelectorAll(".sendButton").forEach((element, index) => {
      element.addEventListener("click", () => {
        if(document.getElementsByClassName("commentWrite")[index].value) {
          const comment = document.createElement("li");
          comment.innerHTML = "<strong class='myname'>username </strong>" + document.getElementsByClassName("commentWrite")[index].value;
          document.getElementsByClassName("commentList")[index].appendChild(comment);
          document.getElementsByClassName("commentWrite")[index].value = "";
          document.getElementsByClassName("sendButton")[index].style.color = "#b1defc";
          document.getElementsByClassName("sendButton")[index].style.cursor = "auto";
        }
      });
    });

    document.querySelectorAll(".heart").forEach((element, index) => {
      element.addEventListener("click", () => {
        document.getElementsByClassName("heart")[index].classList.toggle("hearted");
        document.getElementsByClassName("likes")[index].classList.toggle("liked");
        if(document.getElementsByClassName("likes")[index].classList.contains("liked")) {
          element.setAttribute("src", "https://www.pinclipart.com/picdir/middle/87-877828_save-the-heart-by-ofirma85-instagram-like-icon.png");
          element.style.animationName = "heartpop";
          document.getElementsByClassName("insideLikes")[index].innerHTML = `${parseInt(document.getElementsByClassName('insidelikes')[index].innerHTML) + 1} likes`;
        } else {
          element.setAttribute("src", "https://res.cloudinary.com/miko2/image/upload/v1639885837/heart_ri9t4b.png");
          element.style.animationName = "";
          document.getElementsByClassName("insideLikes")[index].innerHTML = `${parseInt(document.getElementsByClassName('insidelikes')[index].innerHTML) - 1} likes`;
        }
      });
    
      document.querySelectorAll(".bookmark").forEach((element, index) => {
        element.addEventListener("click", () => {
          document.getElementsByClassName("bookmark")[index].classList.toggle("hearted");
          document.getElementsByClassName("bookmark")[index].classList.toggle("clicked");
          if(document.getElementsByClassName("bookmark")[index].classList.contains("clicked")) {
            document.getElementsByClassName("bookmark")[index].setAttribute("src", "https://cdn4.iconfinder.com/data/icons/basic-ui-23/32/37-_bookmark-save-marking-UI-512.png");
          } else {
            document.getElementsByClassName("bookmark")[index].setAttribute("src", "https://cdn4.iconfinder.com/data/icons/basic-ui-22/32/37-_bookmark-save-marking-UI-512.png");
          }
        });
      });
    });  
  });

window.addEventListener("load", () => {
  const max = Math.floor(Math.random()*8) + 1;
  for(let i = 0; i < max; i++) {
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", "https://th.bing.com/th/id/R.c7b7adb352f100c618bc4e1ff17285ec?rik=2A8eYsGVuRHvWw&riu=http%3a%2f%2fletsplaymancala.com%2fimg%2favatar_silhouette.png&ehk=DWO60tNmETRTbiX0ijo%2fjO2XS7WcAk79RTecWsv5vPc%3d&risl=&pid=ImgRaw&r=0");
    const person = document.createElement("div");
    person.appendChild(image);
    const name = document.createElement("p");
    name.innerHTML = `username${Math.floor(Math.random() * 100) + 2}`
    person.appendChild(name);
    document.getElementById("recentPeople").appendChild(person);
  }
});