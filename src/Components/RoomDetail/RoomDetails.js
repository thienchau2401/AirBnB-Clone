import React from "react";
import { useSelector } from "react-redux";
import "./roomDetails.scss";

const RoomDetails = () => {
  const { argRoom } = useSelector((state) => state.roomSlice);
  const { arrReview, average } = useSelector((state) => state.reviewSlice);
  console.log(average);

  return (
    <div className="roomDetail">
      <h1 className="font-semibold text-3xl mb-5">{argRoom.tenPhong}</h1>
      <div className="roomImg mb-5">
        <img src={argRoom.hinhAnh} />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="font-semibold text-2xl">{argRoom.tenPhong}</h2>
          <p className="mb-5">
            {argRoom.khach} khách - {argRoom.phongNgu} phòng ngủ -{" "}
            {argRoom.giuong} giường - {argRoom.phongTam} phòng tắm
          </p>
          <div className="evaluate grid grid-cols-4 items-center mb-5">
            <div className="firstColumn flex justify-center">
              <div className="img">
                <img src="./../img/review1.jpg" alt="review1.jpg" />
              </div>
              <p className="text text-center font-semibold">
                Được khách
                <br /> yêu thích
              </p>
              <div className="img">
                <img src="./../img/review2.jpg" alt="review2.jpg" />
              </div>
            </div>
            <p className="font-semibold">
              Khách đánh giá đây là một trong những ngôi nhà được yêu thích nhất
              trên Airbnb
            </p>
            <div className="thirdColumn text-center">
              <p className="font-semibold text-xl">{average.toFixed(1)}</p>
              <p>
                {Array.from(Array(average), (e, i) => {
                  return <i className="fa-solid fa-star" key={i}></i>;
                })}
              </p>
            </div>
            <div className="fourthColumn text-center">
              <p className="font-semibold text-xl">{arrReview.length}</p>
              <p className="underline">đánh giá</p>
            </div>
          </div>
          <div className="owner flex">
            <div className="imgOwner">
              <img src={"./../img/owner.jpg"} alt="owner.jpg" />
            </div>
            <div className="ownerInfo">
              <h3 className="font-semibold">Chủ nhà/Người tổ chức: Martina</h3>
              <p className="text-gray-500">
                Chủ nhà siêu cấp - 1 năm kinh nghiệm đón tiếp khách
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <div className="roomInfo">
            <div className="flex mb-3.5">
              <i className="fa-solid fa-door-closed"></i>
              <p className="content">
                <span className="font-semibold">Tự nhận phòng</span>
                <br />
                Tự nhận phòng bằng khóa thông minh.
              </p>
            </div>
            <div className="flex mb-3.5">
              <i className="fa-solid fa-award"></i>
              <p className="content">
                <span className="font-semibold">
                  Martina là Chủ nhà siêu cấp
                </span>
                <br />
                Chủ nhà siêu cấp là những Chủ nhà dày dạn kinh nghiệm, được đánh
                giá cao.
              </p>
            </div>
            <div className="flex mb-3.5">
              <i className="fa-solid fa-calendar"></i>
              <p className="font-semibold content">
                Hủy miễn phí trước 2 tháng 1
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <p>{argRoom.moTa}</p>
          <hr className="my-5" />
          <div className="bedroom">
            <h3 className="font-semibold text-xl mb-2.5">
              Nơi bạn sẽ ngủ nghỉ
            </h3>
            <div>
              <i className="fa-solid fa-bed"></i>
              <p className="font-semibold mb-1.5">Phòng ngủ</p>
              <p>{argRoom.phongNgu} giường king</p>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <h3 className="font-semibold text-xl mb-2.5">
              Nơi này có những gì cho bạn
            </h3>
            <div className="flex roomOffer gap-16">
              <div>
                <div className="item">
                  {argRoom.mayGiat ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14A1 1 0 0 0 26.3 4zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.84 7.5c-.34 0-.68.02-1.02.07a7 7 0 0 0 13.1 4.58 9.09 9.09 0 0 1-6.9-2.37l-.23-.23a6.97 6.97 0 0 0-4.95-2.05zM16 9a7 7 0 0 0-6.07 3.5h.23c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 6.4 1.9A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                      </svg>
                      <p>Máy giặt</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.banLa ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.03 3h.3a12.5 12.5 0 0 1 11.82 9.48l.07.3 1.73 7.79.03.14A2 2 0 0 1 28.15 23H2.1a2 2 0 0 1-1.85-1.84v-7.38a5 5 0 0 1 4.77-4.77L5.25 9h9V5h-14V3zm11.53 16H2.25v2H28zM16.24 5v6H5.07a3 3 0 0 0-2.82 2.82V17H27.1l-.84-3.78-.07-.28a10.5 10.5 0 0 0-9.6-7.92L16.32 5z"></path>
                      </svg>
                      <p>Bàn ủi</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.tivi ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z"></path>
                      </svg>
                      <p>Ti vi</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.dieuHoa ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z"></path>
                      </svg>
                      <p>Máy lạnh</p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <div className="item">
                  {argRoom.wifi ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path>
                      </svg>
                      <p>Wifi</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.bep ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path>
                      </svg>
                      <p>Bếp</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.doXe ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
                      </svg>
                      <p>Chỗ đỗ xe miễn phí tại nơi ở</p>
                    </div>
                  ) : null}
                </div>
                <div className="item">
                  {argRoom.hoBoi ? (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 24 + "px",
                          width: 24 + "px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z"></path>
                      </svg>
                      <p>Hồ bơi</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Testing</div>
      </div>
    </div>
  );
};

export default RoomDetails;
