import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;
  if (isInitializing) return <Loading />;

  return (
    <div className="h-screen">
      <Head>
        <title>SimpleVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-slate-900 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
