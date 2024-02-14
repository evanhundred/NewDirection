const render = () => {
  const App = document.createElement("div");
  App.id = "app-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logoImg = document.createElement("img");
  logoContainer.append(logoImg);
  logoImg.src = "../assets/nd_logo.png";

  const h1 = document.createElement("h1");
  h1.innerText = "N D";

  App.append(logoContainer, h1);

  const root = document.getElementById("root");
  root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
