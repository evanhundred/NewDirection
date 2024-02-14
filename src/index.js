const render = () => {
  const App = document.createElement("div");
  App.id = "app-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logoImg = document.createElement("img");
  logoContainer.append(logoImg);
  logoImg.src = "../assets/nd_logo.png";

  const titleContainer = document.createElement("div");
  titleContainer.id = "title-container";
  const h1 = document.createElement("h1");
  titleContainer.append(h1);
  h1.innerText = "N D";

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
  eventsContent.className = "content";
  // const eventsArray = [];

  let newEvent = document.createElement("div");
  eventsContent.append(newEvent);
  newEvent.className = "new-event";
  let header = document.createElement("h3");
  header.innerText = "Black History Celebration";
  newEvent.append(header);

  let text = document.createElement("p");
  text.innerText = "2/24/2024 - 5 PM";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "Queens, NY";
  newEvent.append(text);

  App.append(logoContainer, titleContainer, eventsContainer);

  const root = document.getElementById("root");
  root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
