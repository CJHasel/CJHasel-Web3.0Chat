import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br bg-blue-400"
            : "rounded-bl-none bg-gray-300"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <div
        className={`text-[10px] italic text-gray-300 ${
          isUserMessage && "order-first pr-1"
        }`}
      >
        <TimeAgo datetime={message.createdAt} />
      </div>

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-blue-400" : "text-gray-300"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
