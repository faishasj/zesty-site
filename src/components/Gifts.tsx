import IMAGES from "../Images/images";

function Gifts() {
  return (
    <div className="flex h-screen w-full snap-start bg-primary">
        <div className="flex items-center justify-center h-full w-1/2 bg-info">
          <div className="flex flex-col w-2/3 gap-y-7">
            <article className="text-4xl font-semibold>">Gifts</article>
            <div className="flex flex-col gap-y-5">
              <article className="text-lg">
              Should you wish to honour us with a gift, a contribution
              towards our future together would be sincerely
              appreciated.
              </article>
              <div className="flex flex-col">
                <article className="text-2xl font-medium">Bank Transfer</article>
                <div className="inline-flex gap-x-2">
                  <article className="text-lg font-semibold">ACC Name:</article>
                  <article className="text-lg">Lorum Ipsum</article>
                </div>
                <div className="inline-flex gap-x-2">
                  <article className="text-lg font-semibold">BSB No:</article>
                  <article className="text-lg">201 234</article>
                </div>
                <div className="inline-flex gap-x-2">
                  <article className="text-lg font-semibold">ACC No:</article>
                  <article className="text-lg">0264 855 878</article>
                </div>
              </div>

              <div className="flex flex-col">
                <article className="text-2xl font-medium">Alternative payments:</article>
                <div className="inline-flex gap-x-2">
                  <article className="text-lg font-semibold">Beem:</article>
                  <article className="text-lg">@limnicholased</article>
                </div>
                <div className="inline-flex gap-x-2">
                  <article className="text-lg font-semibold">PayID:</article>
                  <article className="text-lg">0481290817</article>
                </div>
              
              </div>
              <article className="text-lg">Please write “Wedding Gift from name” in the reference section so that we can thank you after the wedding.</article>

            </div>
           
          </div>
          
        </div>
        <img
          className="h-full w-1/2 object-cover overflow-hidden"
          src={IMAGES.image1}
          alt="Photo collage of Rebekah and Nicholas."
        />
    </div>
  );
}
export default Gifts;
