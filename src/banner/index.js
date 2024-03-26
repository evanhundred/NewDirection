const Banner = () => {
  const bannerContainer = document.createElement("div");
  bannerContainer.className = "banner-container";
  const bannerImg = document.createElement("img");
  bannerContainer.append(bannerImg);
  bannerImg.src = "./assets/nd_banner.png";

  return bannerContainer;
};

export default Banner;
