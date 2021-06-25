import React, {useState} from "react";
import {reviews} from "../utils/constants";
import {Image} from "react-bootstrap";

const Review = () => {
  const [data, setData] = useState(reviews[0]);

  return (
    <div className="review">
      <div className="img-section">
        <Image src={data.image} roundedCircle />
      </div>
      <h5 className="name">{data.name}</h5>
      <p className="job">{data.job}</p>
      <p>{data.text}</p>
    </div>
  );
};

export default Review;
