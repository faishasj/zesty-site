import IMAGES from "../Images/images";

function Footer() {
  return (
    <div className="flex h-screen w-full items-center justify-center snap-start bg-base-100">
      <img
        className="max-w-2xl"
        src={IMAGES.seeYouThere}
        alt="See you there!"
      />
    </div>
  );
}
export default Footer;
