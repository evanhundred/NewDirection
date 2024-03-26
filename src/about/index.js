// about container
const About = () => {
  const collapseAbout = (element) => {
    aboutContent.remove();
    element.removeEventListener("click", collapseAbout);
    element.addEventListener("click", () => expandAbout(element));
  };

  const expandAbout = (element) => {
    aboutContainer.append(aboutContent);
    element.removeEventListener("click", expandAbout);
    element.addEventListener("click", () => collapseAbout(element));
  };

  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-container";
  const aboutH2 = document.createElement("h2");
  aboutContainer.append(aboutH2);
  aboutH2.innerText = "Who we are";
  aboutH2.addEventListener("click", () => expandAbout(aboutH2));

  const aboutContent = document.createElement("div");
  aboutContent.className = "content";
  const aboutP = document.createElement("p");
  aboutContent.append(aboutP);
  aboutP.innerText =
    "New Direction is a musical family seeking to manifest God's purpose.";

  return aboutContainer;
};

export default About;
