const Footer = () => {
  const footer = document.createElement("div");
  footer.id = "footer";
  let p = document.createElement("p");
  footer.append(p);
  p.innerHTML =
    '<a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icon created by Freepik - Flaticon</a>';

  return footer;
};

export default Footer;
