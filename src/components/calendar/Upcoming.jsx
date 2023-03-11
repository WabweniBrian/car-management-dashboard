const Upcoming = () => {
  return (
    <div className="mt-4 card">
      <h1 className="text-xl font-semibold">Upcoming Events</h1>
      <div className="mt-5">
        {Array.apply(null, { length: 3 }).map((_, i) => (
          <div className="flex-align-center gap-2 mb-2" key={i}>
            <p>09:00</p>
            <div className="rounded-lg p-2 card-bordered  bg-slate-100 dark:bg-hover-color-dark w-full">
              <h1 className="font-semibold">Drift series First Round</h1>
              <div className="mt-2 flex-center-between">
                <h1>JDM</h1>
                <div className="flex-align-center">
                  <img
                    src="/images/avatar.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 dark:border-dark-light -ml-2"
                  />
                  <img
                    src="/images/avatar-1.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 dark:border-dark-light -ml-2"
                  />
                  <img
                    src="/images/avatar-2.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 dark:border-dark-light -ml-2"
                  />
                  <div className="w-7 h-7 rounded-full border-2 dark:border-dark-light -ml-2 bg-primary grid place-items-center text-sm text-white">
                    +5
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
