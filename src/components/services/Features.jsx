import { features } from "../../data/dummyData";

const Features = () => {
  return (
    <div className="mt-6 card">
      <div className="flex-center-center sm:flex-center-between gap-4 flex-wrap">
        {features.map(
          ({ id, name, part, comment, percentage, bgColor, image }) => (
            <div className="text-center flex-shrink-0" key={id}>
              <img
                src={image}
                alt={name}
                className="w-16 h-16 object-contain mx-auto"
              />
              <h1 className="mt-2 font-semibold text-lg capitalize">{name}</h1>
              <p className="text-sm capitalize">
                <span>{part}</span>
                <span className="mx-4">|</span> <span>{comment}</span>
              </p>
              <div className="w-full h-[5px] bg-slate-100 dark:bg-dark-light rounded-full overflow-hidden mt-2">
                <div
                  className={`h-full rounded-full ${bgColor} ${percentage}`}
                ></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Features;
