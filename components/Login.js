import Image from "next/image";
import { useMoralis } from "react-moralis";
import Loading from "./Loading";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="	https://assets.stickpng.com/images/5a521f522f93c7a8d5137fc7.png"
          width={200}
          height={200}
          className="object-cover rounded-full"
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to Web3.0
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
