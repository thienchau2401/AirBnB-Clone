import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./review.scss";
import ReviewItem from "../ReviewItem/ReviewItem";
import ReactPaginate from "react-paginate";

const renderRating = (aver) => {
  const arrRating = [5, 4, 3, 2, 1];
  return (
    <div>
      {Array.from(Array(arrRating.length), (e, i) => {
        return (
          <p key={i}>
            {arrRating[i]}
            {arrRating[i] == aver ? (
              <span className="ms-3">
                {Array.from(Array(arrRating[i]), (e, i) => {
                  return <i className="fa-solid fa-star text-sm" key={i}></i>;
                })}
              </span>
            ) : (
              <span className="ms-3">
                {Array.from(Array(arrRating[i]), (e, i) => {
                  return <i className="fa-regular fa-star text-sm" key={i}></i>;
                })}
              </span>
            )}
          </p>
        );
      })}
    </div>
  );
};

const Review = () => {
  const { arrReview, average } = useSelector((state) => state.reviewSlice);
  const [pageNumber, setPageNumber] = useState(0);
  const reviewPerPage = 10;
  const pagesVisited = pageNumber * reviewPerPage;
  const pageCount = Math.ceil(arrReview.length / reviewPerPage);

  return (
    <div className="roomReview">
      <div className="overall text-center">
        <div className="overallReview flex justify-center">
          <div className="img">
            <img src="./../img/review1.jpg" alt="review1.jpg" />
          </div>
          <p className="text">{average.toFixed(1)}</p>
          <div className="img">
            <img src="./../img/review2.jpg" alt="review2.jpg" />
          </div>
        </div>
        <h3 className="font-semibold text-xl">Được khách yêu thích</h3>
        <p className="text-gray-500">
          Một trong những ngôi nhà được yêu thích trên Airbnb dựa trên điểm xếp
          hạng, đánh giá và độ tin cậy
        </p>
      </div>
      <div className="criteria grid grid-cols-7 justify-center mt-5">
        <div className="item">
          <p className="font-semibold mb-1">Xếp hạng tổng thể</p>
          {renderRating(average)}
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Mức độ sạch sẽ</p>
          <p className="font-bold mb-1 text-xl">{average - 0.2}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 40 + "px",
              width: 40 + "px",
              fill: "currentcolor",
            }}
            className="mt-5"
          >
            <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z"></path>
          </svg>
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Độ chính xác</p>
          <p className="font-bold mb-1 text-xl">{average - 0.1}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 32,
              width: 32,
              fill: "currentcolor",
            }}
            className="mt-5"
          >
            <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
          </svg>
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Nhận phòng</p>
          <p className="font-bold mb-1 text-xl">{average - 0.2}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 32,
              width: 32,
              fill: "currentcolor",
            }}
            className="mt-5"
          >
            <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
          </svg>
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Giao tiếp</p>
          <p className="font-bold mb-1 text-xl">{average - 0.1}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 32,
              width: 32,
              stroke: "currentcolor",
              strokeWidth: 2,
              overflow: "visible",
            }}
            className="mt-5"
          >
            <path
              fill="none"
              d="M26 3a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-6.32L16 29.5 12.32 25H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
            />
          </svg>
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Vị trí</p>
          <p className="font-bold mb-1 text-xl">{average - 0.2}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 32,
              width: 32,
              fill: "currentcolor",
            }}
            className="mt-5"
          >
            <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
          </svg>
        </div>
        <div className="item">
          <p className="font-semibold mb-1">Giá trị</p>
          <p className="font-bold mb-1 text-xl">{average.toFixed(1)}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 32,
              width: 32,
              fill: "currentcolor",
            }}
            className="mt-5"
          >
            <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      <hr className="my-5" />
      <div className="review">
        <div className="grid grid-cols-2">
          {arrReview
            .slice(pagesVisited, pagesVisited + reviewPerPage)
            .map((item, index) => {
              return <ReviewItem review={item} key={index} />;
            })}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={({ selected }) => {
            setPageNumber(selected);
          }}
          containerClassName={"btnPagination"}
          previousLinkClassName={"btnPrevious"}
          nextLinkClassName={"btnNext"}
          disabledClassName={"btnDisabled"}
          activeClassName={"btnActive"}
        />
      </div>
    </div>
  );
};

export default Review;
