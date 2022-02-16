import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar(username, logoutOnPress) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-80 hover:animate-spin"
      src={`https://avatars.dicebear.com/api/pixel-art/${user.get(
        "username"
      )}.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}

export default Avatar;
