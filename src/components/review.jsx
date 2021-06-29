import React, {useState, useEffect} from "react";
import {reviews} from "../utils/constants";
import {Image, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    setCurrentReview(data[index]);
  }, [index]);

  // handle click of the arrow buttons
  const handleArrowClick = (direction) => {
    // if left arrow is clicked, decrease the index
    if (direction === "left") {
      index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    }
    // if right arrow is clicked, increase the index
    else {
      index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  // this method will be used to select a random review from the 'data' array
  const handleSurpriseMeClick = () => {
    let indexes = [];
    // get all indexes
    data.map((item, index) => {
      indexes.push(index);
    });

    // remove the index of current review from indexes array, to avoid selection of that index again
    let filtered_indexes = indexes.filter((value, ind) => value !== index);

    // get a random index value from the indexes array
    var random = filtered_indexes[Math.floor(Math.random() * filtered_indexes.length)];

    // set the random value as new index
    setIndex(random);
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
      <Button onClick={handleSurpriseMeClick}>Surprise Me</Button>
    </div>
  );
};

export default Review;
