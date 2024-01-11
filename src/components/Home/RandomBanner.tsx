import { Banner, BannerImg } from "../../styles/HomeStyle";

const RandomBanner = () => {
  const bannerNumber = Math.floor(Math.random() * 3) + 1;
  const bannerSrc = require(`../../assets/images/banner_${bannerNumber}.png`);

  return (
    <Banner>
      <BannerImg src={bannerSrc} />
    </Banner>
  );
};

export default RandomBanner;
