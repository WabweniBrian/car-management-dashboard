const CarDetails = () => {
  return (
    <div className="card !bg-secondaryBlue text-slate-100 dark:!bg-card-dark md:h-[90vh]">
      <div className="flex-center-between">
        <div>
          <p>Fuel Usage</p>
          <h1 className="text-xl font-semibold">2903.89 Ltr</h1>
        </div>
        <div className="w-[1px] h-10 bg-blue-400 dark:bg-dark-light"></div>
        <div>
          <p>KM Driven</p>
          <h1 className="text-xl font-semibold">2903.89 Ltr</h1>
        </div>
      </div>
      <div className="flex-center-between mt-4">
        <div>
          <p>Total Cost</p>
          <h1 className="text-xl font-semibold">$3,290.00</h1>
        </div>
        <div className="w-[1px] h-10 bg-blue-400 dark:bg-dark-light"></div>
        <div>
          <p>Top Speed</p>
          <h1 className="text-xl font-semibold">$5.2K</h1>
        </div>
      </div>
      <img
        src="/images/cars/features.png"
        alt=""
        className="w-4/5 mx-auto mt-4"
      />
    </div>
  );
};

export default CarDetails;
