import AboutComponent from "../About/AboutComponent";
import BannerComponent from "../Banner/BannerComponent";
import ServicesComponent from "../Services/ServicesComponent";

const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <AboutComponent/>
      <ServicesComponent/>
    </>
  );
};

export default HomePage;
