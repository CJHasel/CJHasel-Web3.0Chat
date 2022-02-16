import Image from "next/image";
import { useMoralis } from "react-moralis";
import nft from "../Images/nft.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-slate-300 sticky top-0 p-5 z-50 bg-gradient-to-b shadow-sm border-b-2 border-slate-400">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            objectFit="cover"
            className="rounded-full"
            layout="fill"
            src={nft}
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div
            className="relative h-48 w-48
          lg:mx-auto border-slate-400 border-8 rounded-full hover:border-slate-50"
          >
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the SimpleVerse</h1>
          <h2 className="text-4xl font-bold truncate ">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
