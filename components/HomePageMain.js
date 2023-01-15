import ContentContainer from "./ContentContainer";
const TopExplanation = () => {
  return (
    <div>
      <img className="img" src="/home/mobile/create-and-share.jpg" alt="adad" />
      <ContentContainer
        header="Create and share your photo stories."
        copy="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        btn="get an invite"
        bgColor="dark"
      ></ContentContainer>
      <img className="img" src="/home/mobile/beautiful-stories.jpg" alt="" />
      <ContentContainer
        header="Beautiful stories every time."
        copy="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        btn="view the stories"
        bgColor="white"
      ></ContentContainer>
      <img
        className="img"
        src="/home/mobile/designed-for-everyone.jpg"
        alt=""
      />
      <ContentContainer
        header="designed for everyone."
        copy="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        btn="view the stories"
        bgColor="white"
      ></ContentContainer>
    </div>
  );
};

export default TopExplanation;
