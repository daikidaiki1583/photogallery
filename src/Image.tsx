import React, { FC, useState } from "react";

import "./Image.scss";
type Props = {
  src: string;
  alt: string;
};

const Image: FC<Props> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((state) => !state);
  };

  const handleEnterLeave = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (e.type === "mouseenter") {
      setIsEnter(true);
    } else {
      setIsEnter(false);
    }
  };

  const r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);

  return (
    <img
      style={
        isEnter ? { boxShadow: `0 0 10px 0 rgba(${r},${g},${b},0.9)` } : {}
      }
      className={isOpen ? "photo open" : "photo"}
      src={src}
      alt={alt}
      onClick={handleClick}
      onMouseEnter={handleEnterLeave}
      onMouseLeave={handleEnterLeave}
    />
  );
};

export default Image;
