function Schedule() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center snap-start bg-base-content gap-12">
      <article className="text-3xl text-black font-semibold">Schedule</article>
      <ul className="timeline timeline-vertical timeline-snap-icon ">
        <article className="text-2xl text-black mb-6">12.04.25</article>
        <li>
          <div className="timeline-middle">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-accent">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
            <article className="text-2xl text-black">4:00pm</article>
            <div className="flex flex-col items-start">
              <article className="text-2xl text-black mb-4">
                Guests arrive
              </article>
              <article className="text-xl text-black">Rydges Melbourne</article>
              <article className="text-xl text-black">
                186 Exhibition St, Melbourne VIC 3000
              </article>
              <a
                href="https://maps.app.goo.gl/222TiM5JRD5yM1Y67"
                className="text-xl text-accent underline"
              >
                Get directions
              </a>
            </div>
          </div>
          <hr className="bg-accent !w-[2px]" />
        </li>
        <li>
          <hr className="bg-accent !w-[2px]" />
          <div className="timeline-middle">
            <div className="timeline-middle">
              <svg viewBox="0 0 16 16" className="h-3 w-3 fill-accent">
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
          </div>
          <div className="timeline-end timeline-box">
            <article className="text-2xl text-black">4:30pm</article>
            <div className="flex flex-col items-start">
              <article className="text-2xl text-black mb-4">Ceremony</article>
              <article className="text-xl text-black">
                Rydges Melbourne, level 2, Rooftop Terrace
              </article>
            </div>
          </div>
          <hr className="bg-accent !w-[2px]" />
        </li>
        <li>
          <hr className="bg-accent !w-[2px]" />
          <div className="timeline-middle">
            <div className="timeline-middle">
              <svg viewBox="0 0 16 16" className="h-3 w-3 fill-accent">
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
          </div>
          <div className="timeline-end timeline-box">
            <article className="text-2xl text-black">6:00pm</article>
            <div className="flex flex-col items-start">
              <article className="text-2xl text-black mb-4">Reception</article>
              <article className="text-xl text-black">
                Rydges Melbourne. Floor 1, Centre Stage
              </article>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Schedule;
