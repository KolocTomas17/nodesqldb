
import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContactUs from "./mainPage/ContactUs";
import Hero from "./mainPage/Hero";
import MainContent from "./mainPage/MainContent";
import Services from "./mainPage/Services";

const Body = () => {
  return (
    <>
    <Hero></Hero>
      <div className="main-content">
  <div className="section-light about-me" id="about-me">
    <MainContent></MainContent>
  </div>
<Services></Services>
<ContactUs></ContactUs>
</div>
<BackToTopBtn></BackToTopBtn>
    </>
  );
};

export default Body;
