import FeaturesCard from "../components/Features/FeaturesCard";
import Footer from "../components/Footer/Footer";
import HomePageMain from "../components/HomePageMain";
import Navbar from "../components/Navbar";
import PhotoContainer from "../components/PhotoContainer";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HomePageMain></HomePageMain>

        <div>
          <PhotoContainer
            title="The Mountains"
            author="John Appleseed"
            img="mountains"
          ></PhotoContainer>
          <PhotoContainer
            title="Sunset Cityscape"
            author="Benjamin Cruz"
            img="cityscapes"
          ></PhotoContainer>
          <PhotoContainer
            title="18 Days Voyage"
            author="Alexei Borodin"
            img={"18-days-voyage"}
          ></PhotoContainer>
          <PhotoContainer
            title="Architecturals"
            author="Samantha Brooke"
            img={"architecturals"}
          ></PhotoContainer>
        </div>

        <section className="feature-container">
          <FeaturesCard
            img={"responsive"}
            title={"100% Responsive"}
            copy={
              "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            }
          ></FeaturesCard>
          <FeaturesCard
            img={"no-limit"}
            title={"No Photo Upload Limit"}
            copy={
              "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            }
          ></FeaturesCard>
          <FeaturesCard
            img={"embed"}
            title={"Available to Embed"}
            copy={
              "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
            }
          ></FeaturesCard>
        </section>

        <Footer></Footer>
      </main>
    </>
  );
}
