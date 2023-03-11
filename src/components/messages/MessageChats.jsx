import { messages } from "../../data/messages";

const MessageChats = () => {
  return (
    <div className="h-[60vh] overflow-auto">
      {messages.map(({ id, text, user }) => (
        <div key={id} className="mb-3">
          {user.id === "u1" ? (
            <div className="flex gap-2 justify-start">
              <img
                src="/images/avatar.png"
                alt=""
                className="w-7 h-7 rounded-full"
              />
              <div className="p-2 rounded-lg !rounded-tl-none bg-primary text-white max-w-[80%]">
                {text}
              </div>
            </div>
          ) : (
            <div className="flex gap-2 justify-end">
              <div className="p-2 rounded-lg !rounded-tr-none bg-slate-200 dark:bg-dark-light max-w-[80%]">
                {text}
              </div>
              <img
                src="/images/avatar-2.png"
                alt=""
                className="w-7 h-7 rounded-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageChats;
