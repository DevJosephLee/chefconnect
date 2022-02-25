import React from 'react';
import StarRating from './star-rating';

function Reviews(props) {
  return (
    props.reviews.map(reviews => {
      return (
        <div key={reviews.reviewId} className="review-section mt-3">
          <div className="d-flex align-items-center mb-2">
            <div className="col-4 text-center">
              <img src={reviews.photoUrl} className="user-picture shadow" />
            </div>
            <div className="col-8">
              <h3>{reviews.username}</h3>
              <h5>{reviews.createdAt.slice(0, 10)}</h5>
              <StarRating rating={reviews.rating} />
            </div>
          </div>
          <div className="">
            <p className="ms-3 ms-md-5 ms-lg-3 ms-xl-4 ms-xxl-5">{reviews.content}</p>
          </div>
        </div>
      );
    })
  );
}

export default Reviews;
