import React, {useState} from "react";
import {reviews} from "../utils/constants";

const Review = () => {
  const [data, setData] = useState(reviews);

  return <div className="review">Review</div>;
};

export default Review;
