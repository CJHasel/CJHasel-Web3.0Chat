import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username || username.length > 50) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5 hover:text-slate-50">
      <button disabled={isUserUpdating} onClick={setUserName}>
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
