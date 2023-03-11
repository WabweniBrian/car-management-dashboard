import { FiLink, FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <div className="input-with-icon mt-4">
      <FiLink />
      <input type="text" name="message" placeholder="Type Something" />
      <FiSend className="icon-send absolute right-2 top-1/2 -translate-y-1/2 text-primary" />
    </div>
  );
};

export default MessageInput;
