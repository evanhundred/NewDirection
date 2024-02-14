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

  App.append(logoContainer, titleContainer);

  const root = document.getElementById("root");
  root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
