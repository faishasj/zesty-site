import IMAGES from "../Images/images";

function Welcome() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center p-4 h-screen w-full bg-base-content snap-start snap-always">
      <img
        className="max-w-2xl"
        src={IMAGES.title}
        alt="Nicholas and Rebekah are getting married!"
      />
      <article className="text-xl text-black font-medium">
        4:30 in the afternoon | 12th of April | RYDGES Melbourne
      </article>
      <div className="flex flex-col items-center">
        <article className="text-xl text-black font-semibold">
          SCROLL DOWN TO RSVP
        </article>
        <img className=" w-[24px] h-[24px]" src={IMAGES.chevronDown} />
      </div>
    </div>
  );
}
export default Welcome;
