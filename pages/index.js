import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Loading from "../components/Loading";

export default function Home() {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;
  if (isInitializing) return <Loading />;

  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
