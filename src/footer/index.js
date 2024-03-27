const Footer = () => {
  const footer = document.createElement('div');
  footer.id = 'footer';
  let p = document.createElement('p');
  footer.append(p);
  p.innerHTML =
    'Instagram logo icon created by <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Freepik - Flaticon</a>';

  return footer;
};

export default Footer;
