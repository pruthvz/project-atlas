import React, { useState } from "react";

function ScrollUpBtn() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        onClick={scrollToTop}
        type="button"
        class="btn btn-floating rounded-pill"
        id="btn-back-to-top"
        style={{ display: visible ? "inline" : "none" }}
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default ScrollUpBtn;
