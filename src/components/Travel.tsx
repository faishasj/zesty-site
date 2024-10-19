import IMAGES from "../Images/images";

function Travel() {
    return (
        <div className="flex h-screen w-full items-center justify-center snap-start bg-primary">
            <div className="h-full w-full object-cover overflow-hidden">
                <article className="flex h-full">
                    <img
                        className="h-full w-6/12 object-cover overflow-hidden"
                        src={IMAGES.image1}
                        alt="Photo collage of Rebekah and Nicholas."
                    />
                    <div className="h-full w-6/12 bg-base-300 object-cover overflow-hidden">
                        <div>

                        </div>
                    </div>

                </article>

            </div>
        </div>
    );
}
export default Travel;
