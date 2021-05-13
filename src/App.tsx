import React, { useState, useEffect } from "react";
import Photos from "./Photos";
import logo from "./img/IMG1.jpeg";
import logo2 from "./img/IMG2.jpeg";
import logo3 from "./img/IMG3.jpeg";
import logo4 from "./img/IMG4.jpeg";
import logo5 from "./img/IMG5.jpeg";
import logo6 from "./img/IMG6.jpeg";
import logo7 from "./img/IMG7.jpeg";
import logo8 from "./img/IMG8.jpeg";
import logo9 from "./img/IMG9.jpeg";
import "./App.css";

export type Data = {
  id: number;
  src: string;
  alt: string;
};

const imageData = [
  {
    id: 1,
    src: logo,
    alt: "柴犬",
  },
  {
    id: 2,
    src: logo2,
    alt: "柴犬",
  },
  {
    id: 3,
    src: logo3,
    alt: "柴犬",
  },
  {
    id: 4,
    src: logo4,
    alt: "柴犬",
  },
  {
    id: 5,
    src: logo5,
    alt: "柴犬",
  },
  {
    id: 6,
    src: logo6,
    alt: "柴犬",
  },
  {
    id: 7,
    src: logo7,
    alt: "柴犬",
  },
  {
    id: 8,
    src: logo8,
    alt: "柴犬",
  },
  {
    id: 9,
    src: logo9,
    alt: "柴犬",
  },
];

function App() {
  const [data, setDate] = useState<Data[]>([]);

  useEffect(() => {
    setDate(imageData);
  }, []);

  return (
    <div className="App">
      <Photos data={data} />
    </div>
  );
}

export default App;
