import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>
        <a
          href="https://tranandrew-dt.github.io/alittlesnowy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to my Homepage
        </a>
      </p>
    </footer>
  );
}

export default Footer;
