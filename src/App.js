import React from "react";
import "./main.scss";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const handleButton = () => {
    if (navigator.share !== undefined) {
      setToggle(true);
      navigator
        .share({
          title: "Hello",
          url: `www.google.com`
        })
        .then(() => {
          console.log("thanks for sharing");
        })
        .catch(console.error);
    } else {
      return null;
    }
  };

  return (
    <div className="abc">
      <div className="container">
        <h1>Social Media App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          exercitationem quisquam mollitia totam amet quae neque provident
          beatae numquam voluptates voluptatum, non nulla, vitae iusto expedita
          illum harum. Eum, quis.
        </p>
        <button onClick={handleButton} className="primary">
          Share This Story
        </button>
      </div>
      {toggle && <></>}
    </div>
  );
}

export default App;
