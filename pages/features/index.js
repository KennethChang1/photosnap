import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import FeaturesCard from "../../components/Features/FeaturesCard";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <img className="img" src="/features/mobile/hero.jpg" alt="" />
        <div className="card card-dark card-feature">
          <h2 className="card_header">Features</h2>
          <p className="card_copy">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>

        <section>
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
          <FeaturesCard
            img={"custom-domain"}
            title={"Custom Domain"}
            copy={
              "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            }
          ></FeaturesCard>
          <FeaturesCard
            img={"boost-exposure"}
            title={"Boost Your Exposure"}
            copy={
              "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            }
          ></FeaturesCard>
          <FeaturesCard
            img={"drag-drop"}
            title={"Drag & Drop Image"}
            copy={
              "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            }
          ></FeaturesCard>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
