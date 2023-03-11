const ServiceSchedule = () => {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">Service Schedule</h1>
      <div className="mt-4">
        <div className="input-radio">
          <input type="radio" name="schedule" id="upgrade" />
          <label htmlFor="upgrade" className="font-semibold text-lg">
            Upgrade your favorite car periodically
          </label>
        </div>
        <p className="mt-2 ml-8">Today 10.00 | Fix Price: $1,200</p>
      </div>
      <div className="mt-4">
        <div className="input-radio">
          <input type="radio" name="schedule" id="buy" />
          <label htmlFor="buy" className="font-semibold text-lg">
            Buy spare parts for suspension
          </label>
        </div>
        <p className="mt-2 ml-8">Today 14.00 | Fix Price: $1,400</p>
      </div>
    </div>
  );
};

export default ServiceSchedule;
