const themeButton = document.getElementById("theme-button");
const themeMessage = document.getElementById("theme-message");
const galleryLinks = document.querySelectorAll(".gallery-link");

function changeTheme() {
  document.body.classList.toggle("warm-theme");

  if (document.body.classList.contains("warm-theme")) {
    themeMessage.textContent = "Warm theme is now on.";
  } else {
    themeMessage.textContent = "Welcome to my personal art portfolio.";
  }
}

if (themeButton && themeMessage) {
  themeButton.addEventListener("click", changeTheme);
}

function selectArtwork(link) {
  for (let i = 0; i < galleryLinks.length; i++) {
    galleryLinks[i].classList.remove("selected");
  }

  link.classList.add("selected");

  if (themeMessage) {
    const artworkTitle = link.querySelector("h3").textContent;
    themeMessage.textContent = "You selected " + artworkTitle + ".";
  }
}

for (let i = 0; i < galleryLinks.length; i++) {
  galleryLinks[i].addEventListener("click", function() {
    selectArtwork(galleryLinks[i]);
  });
}