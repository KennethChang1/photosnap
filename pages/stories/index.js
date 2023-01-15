import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import PhotoContainer from "../../components/PhotoContainer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <img
          className="img"
          src="/stories/mobile/moon-of-appalacia.jpg"
          alt=""
        />
        <div className="card card-dark">
          <p className="card_headline">LAST MONTH’S FEATURED STORY</p>
          <h2 className="card_header">HAZY FULL MOON OF APPALACHIA</h2>
          <p className="card_date">
            <span className="card_date-light">March 2nd 2020</span> by John
            Appleseed
          </p>
          <p className="card_copy">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="btn-container">
            <a href="/" className="btn btn-dark">
              Read the story
            </a>
            <img src="/shared/desktop/arrow.svg" alt="" />
          </div>
        </div>

        <section>
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
          <PhotoContainer
            title="World Tour 2019"
            author="Timothy Wagner"
            img={"world-tour"}
          ></PhotoContainer>
          <PhotoContainer
            title="Unforeseen Corners "
            author="William Malcolm"
            img={"unforeseen-corners"}
          ></PhotoContainer>
          <PhotoContainer
            title="King on Africa: Part II"
            author="Tim Hillenburg"
            img={"king-on-africa"}
          ></PhotoContainer>
          <PhotoContainer
            title="The Trip to Nowhere"
            author="Felicia Rourke"
            img={"trip-to-nowhere"}
          ></PhotoContainer>
          <PhotoContainer
            title="Rage of The Sea"
            author="Mohammed Abdul"
            img={"rage-of-the-sea"}
          ></PhotoContainer>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
