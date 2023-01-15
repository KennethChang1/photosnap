import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import PricingItem from "../../components/PricingItem/PricingItem";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <img className="img" src="/pricing/mobile/hero.jpg" alt="" />
        <div className="card card-dark card-feature">
          <h2 className="card_header">pricing</h2>
          <p className="card_copy">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>

        <section className="container">
          <PricingItem
            title={"Basic"}
            copy="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={"19.00"}
            bgCol={"styles.cardLight"}
          ></PricingItem>
          <PricingItem
            title={"Pro"}
            copy="More advanced features available. Recommended for photography veterans and professionals."
            price={"39.00"}
            dark={true}
          ></PricingItem>
          <PricingItem
            title={"Business"}
            copy="Additional features available such as more detailed metrics. Recommended for business owners."
            price={"99.00"}
          ></PricingItem>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
