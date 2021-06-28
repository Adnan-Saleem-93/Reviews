import React, {useState, useEffect} from "react";
import {reviews} from "../utils/constants";
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    setCurrentReview(data[index]);
  }, [index]);

  const handleArrowClick = (direction) => {
    // console.log(direction);
    if (direction === "left") {
      index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    } else {
      index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  return (
    <div className="review">
      <div className="img-section">
        <Image src={currentReview.image} roundedCircle />
      </div>
      <h5 className="name">{currentReview.name}</h5>
      <p className="job">{currentReview.job}</p>
      <p>{currentReview.text}</p>
      <div>
        <button>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={() => handleArrowClick("left")} />
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={() => handleArrowClick("right")} />
        </button>
      </div>
    </div>
  );
};

export default Review;
