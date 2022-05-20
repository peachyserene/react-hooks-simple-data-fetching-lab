import React, { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => setUrl(data.message));
  }, []);
  if (!url) return <p>Loading...</p>;

  return <img alt="A Random Dog" src={url} />;
}

export default App;
