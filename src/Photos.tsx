import React, { FC } from "react";
import Image from "./Image";
import { Data } from "./App";
import "./Photos.scss";

type Props = {
  data: Data[];
};

const Photos: FC<Props> = ({ data }) => {
  return (
    <div className="photos">
      {data.map((d) => (
        <Image src={d.src} alt={d.alt} key={d.id} />
      ))}
    </div>
  );
};

export default Photos;
