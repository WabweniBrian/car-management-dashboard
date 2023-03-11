import { BiCheckDouble, BiEnvelope } from "react-icons/bi";
import { userMessages } from "../../data/dummyData";

const AllMessages = () => {
  return (
    <div className="mt-4">
      <div className="flex-align-center gap-x-2">
        <BiEnvelope className="opacity-60" />
        <p className="uppercase text-sm opacity-60">All Messages</p>
      </div>
      <div className="mt-2">
        {userMessages.map(
          ({ id, name, online, unread_messages, last_message, avatar }) => (
            <div
              key={id}
              className="flex-center-between gap-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-dark-light transition-colors"
            >
              <div className="flex-align-center gap-2">
                <div className={`${online && "avatar"} w-8 h-8`}>
                  <img src={avatar} alt="" className="rounded-full" />
                </div>
                <div>
                  <h1 className="font-semibold">{name}</h1>
                  {last_message ? (
                    <p className="text-sm">{last_message} </p>
                  ) : (
                    <p className="text-green-500 text-sm">Typing...</p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm">4:30 PM</p>
                {unread_messages ? (
                  <div className="icon-box !w-4 !h-4 !bg-red-500 text-white">
                    <p className="text-xs">{unread_messages}</p>
                  </div>
                ) : (
                  <BiCheckDouble className="text-green-500" />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllMessages;
