import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center>
      <div>
        <img
          src="https://assets.stickpng.com/images/5a521f522f93c7a8d5137fc7.png"
          alt="logo"
          height="200px"
          style={{ marginBottom: 10 }}
        />
        <Circle color="#d2a83d" size={128} />
      </div>
    </center>
  );
}

export default Loading;
