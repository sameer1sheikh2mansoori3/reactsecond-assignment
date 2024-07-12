// import React from 'react';
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 1000,
    }}
  >
    <ContentLoader viewBox="0 0 800 600" width={800} height={600} {...props}>
      <circle cx="100" cy="100" r="50" />
      <rect x="170" y="70" width="200" height="20" />
      <rect x="170" y="100" width="400" height="20" />
      <rect x="170" y="130" width="300" height="20" />
      <rect x="170" y="160" width="250" height="20" />

      <circle cx="100" cy="250" r="50" />
      <rect x="170" y="220" width="200" height="20" />
      <rect x="170" y="250" width="400" height="20" />
      <rect x="170" y="280" width="300" height="20" />
      <rect x="170" y="310" width="250" height="20" />

      <circle cx="100" cy="400" r="50" />
      <rect x="170" y="370" width="200" height="20" />
      <rect x="170" y="400" width="400" height="20" />
      <rect x="170" y="430" width="300" height="20" />
      <rect x="170" y="460" width="250" height="20" />
    </ContentLoader>
  </div>
);

// AuthorsList.metadata = {
//   name: "BYIRINGIRO Emmanuel", // My name
//   github: "emmbyiringiro", // Github username
//   description: "Authors/posts list style", // Loader description
//   filename: "AuthorsList", // filename of your loader
// };

export default MyLoader;
