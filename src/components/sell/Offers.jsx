import { FiArrowRight, FiShare2 } from "react-icons/fi";
import { FaCar, FaDollarSign } from "react-icons/fa";
import GaugeChart from "../home/GaugeChart";

const Offers = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold">Offers</h1>
      {Array.apply(null, { length: 2 }).map((_, i) => (
        <div className="mt-6 card" key={i}>
          <div className="flex-align-center gap-4 flex-col md:flex-row">
            <div className="flex-align-center gap-4 flex-col sm:flex-row">
              <div>
                <h1 className="font-semibold text-2xl">Killian James</h1>
                <h1>
                  <span className="text-secondaryRed text-xl">$16,605</span>
                  <span className="text-muted text-sm"> average price</span>
                </h1>
                <p>market average is $16,224</p>
                <button className="mt-3 px-3 py-1 rounded-full bg-secondaryRed text-white">
                  <FiArrowRight />
                </button>
              </div>
              <div className="flex-align-center flex-col">
                <GaugeChart percentage={55} chartBg="#4EC579" />
                <p className="mt-2">Impression Share</p>
              </div>
            </div>
            <div className="flex-align-center gap-10 sm:gap-16 flex-col sm:flex-row">
              <div className="flex-align-center flex-col gap-2">
                <div className="icon-box bg-secondaryBlue/20 !w-12 !h-12">
                  <FaCar className="text-secondaryBlue text-2xl" />
                </div>
                <h1 className="text-2xl font-semibold text-secondaryBlue">
                  $1,174
                </h1>
                <p>Model Spend</p>
              </div>

              <div className="flex-align-center flex-col gap-2">
                <div className="icon-box bg-secondaryRed/20 !w-12 !h-12">
                  <FiShare2 className="text-secondaryRed text-2xl" />
                </div>
                <h1 className="text-2xl font-semibold text-secondaryRed">
                  $1,174
                </h1>
                <p>Model Spend</p>
              </div>
              <div className="flex-align-center flex-col gap-2">
                <div className="icon-box bg-primary/20 !w-12 !h-12">
                  <FaDollarSign className="text-primary text-2xl" />
                </div>
                <h1 className="text-2xl font-semibold text-primary">$811</h1>
                <p>Spend per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
