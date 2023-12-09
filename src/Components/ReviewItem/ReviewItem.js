import React from "react";
import "./../Review/review.scss";

const renderStar = (numberOfStar) => {
  return numberOfStar != 0 ? (
    <span>
      {Array.from(Array(numberOfStar), (e, i) => {
        return <i className="fa-solid fa-star" key={i}></i>;
      })}
    </span>
  ) : (
    <span>
      <i className="fa-regular fa-star"></i>
    </span>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <div className="reviewItem">
      <div className="reviewer flex">
        <div className="img">
          <img src={review.avatar} />
        </div>
        <p className="name font-semibold text-lg">{review.tenNguoiBinhLuan}</p>
      </div>
      <div className="ratingStar flex">
        <p className="starReview">{renderStar(review.saoBinhLuan)}</p>
        <p className="date font-semibold">
          <span>
            <i
              className="fa-solid fa-circle"
              style={{ fontSize: 5 + "px", paddingRight: 10 + "px" }}
            ></i>
          </span>
          {review.ngayBinhLuan}
        </p>
      </div>
      <div className="content">{review.noiDung}</div>
    </div>
  );
};

export default ReviewItem;
