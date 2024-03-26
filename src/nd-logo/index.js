const NdLogo = () => {
  const ndIcon = document.createElement("div");
  ndIcon.id = "icon";
  let div;
  div = document.createElement("div");
  div.className = "img-container";
  ndIcon.append(div);
  let img;
  img = document.createElement("img");
  img.id = "n";
  img.src = "./assets/icon/letter-n.png";
  div.append(img);
  img = document.createElement("img");
  img.id = "d";
  img.src = "./assets/icon/letter-d.png";
  div.append(img);

  return ndIcon;
};

export default NdLogo;
