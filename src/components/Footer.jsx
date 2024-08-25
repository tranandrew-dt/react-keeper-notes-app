import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <a
          href="https://tranandrew-dt.github.io/alittlesnowy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to my Homepage
        </a>
      </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
