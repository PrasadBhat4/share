import React from "react";
import "./main.scss";

function App() {
  const title = window.document.title;
  const url = window.document.location.href;
  const overlay = document.querySelector(".overlay");
  const shareModal = document.querySelector(".share");
  const [toggle, setToggle] = React.useState(false);

  const handleButton = () => {
    if (navigator.share === undefined) {
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

  const handleOverlay = () => {
    overlay.classList.remove("show-share");
    shareModal.classList.remove("show-share");
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
      {toggle && (
        <>
          <div className="show-share">
            <div className="share">
              <h2>Share Now</h2>
              <button onClick={handleOverlay}>Social Link</button>
            </div>
          </div>
        </>
      )}
      {/* <div className="overlay">
        <div className="share">
          <h2>Share Now</h2>
          <button onClick={handleOverlay}>Social Link</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
