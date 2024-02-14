const render = () => {
  const App = document.createElement("div");
  App.id = "app-container";
  const contentContainer = document.createElement("div");
  App.append(contentContainer);
  contentContainer.id = "content-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logoImg = document.createElement("img");
  logoContainer.append(logoImg);
  logoImg.src = "./assets/nd_logo.png";

  const expandAbout = (e) => {
    e.preventDefault();
    aboutContainer.append(aboutContent);
  };

  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-container";
  const aboutH2 = document.createElement("h2");
  aboutContainer.append(aboutH2);
  aboutH2.innerText = "Who we are";
  aboutH2.addEventListener("click", expandAbout);

  const aboutContent = document.createElement("div");
  aboutContent.className = "content";
  const aboutP = document.createElement("p");
  aboutContent.append(aboutP);
  aboutP.innerText =
    "New Direction is a musical family seeking to manifest God's purpose.";

  const expandEvents = (e) => {
    e.preventDefault();
    eventsContainer.append(eventsContent);
  };

  const eventsContainer = document.createElement("div");
  eventsContainer.id = "events-container";
  const eventsH2 = document.createElement("h2");
  eventsContainer.append(eventsH2);
  eventsH2.innerText = "events";
  eventsH2.addEventListener("click", expandEvents);

  const eventsContent = document.createElement("div");
  eventsContent.className = "content-container";

  let newEvent = document.createElement("div");
  eventsContent.append(newEvent);
  newEvent.className = "content";
  let header = document.createElement("h3");
  header.innerText = "Black History Celebration";
  newEvent.append(header);

  let text = document.createElement("p");
  text.innerText = "Saturday · 2/24/2024";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "227-11 Linden Blvd.";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "St. Albans, NY";
  newEvent.append(text);

  const instagram = document.createElement("div");
  instagram.id = "instagram-container";
  let a = document.createElement("a");
  instagram.append(a);
  a.href = "https://www.instagram.com/newdirection.music";
  a.target = "_blank";
  rel = "noopener noreferrer";
  let img = document.createElement("img");
  a.append(img);
  img.src = "./assets/instagram.png";

  const footer = document.createElement("div");
  footer.id = "footer";
  let p = document.createElement("p");
  footer.append(p);
  p.innerHTML =
    '<a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Freepik - Flaticon</a>';

  contentContainer.append(
    logoContainer,
    instagram,
    aboutContainer,
    eventsContainer,
    footer
  );

  App.append(footer);

  const root = document.getElementById("root");
  root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
