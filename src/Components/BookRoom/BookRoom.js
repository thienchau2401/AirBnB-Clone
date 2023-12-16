import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DatePicker } from "antd";
import "./bookRoom.scss";

const BookRoom = () => {
  const { argRoom } = useSelector((state) => state.roomSlice);
  const [count, setCount] = useState(1);
  let inputField = document.getElementById("customer");
  return (
    <div className="bookRoom">
      <div className="dialog">
        <h3>
          <span className="font-semibold text-2xl">${argRoom.giaTien}</span> /
          đêm
        </h3>
        <DatePicker.RangePicker
          placeholder={["NHẬN PHÒNG", "TRẢ PHÒNG"]}
          className="mt-5"
        />
        <div className="flex chooseNumber justify-between">
          <p>
            <span className="font-semibold">Người lớn</span>
            <br />
            Từ 13 tuổi trở lên
          </p>
          <div className="flex justify-between divBtn">
            <button
              onClick={() => {
                let currentValue = Number(inputField.value);
                inputField.value = currentValue - 1;
                setCount(currentValue - 1);
              }}
              className={count === 1 ? "disabledBtn" : "btn"}
              disabled={count === 1 ? true : false}
            >
              -
            </button>
            <input id="customer" value={count} className="text-center"></input>
            <button
              onClick={() => {
                let currentValue = Number(inputField.value);
                inputField.value = currentValue + 1;
                setCount(currentValue + 1);
              }}
              className={
                count === Number(argRoom.khach) ? "disabledBtn" : "btn"
              }
              disabled={count === Number(argRoom.khach) ? true : false}
            >
              +
            </button>
          </div>
        </div>
        <button className="btnBook font-semibold my-3">
          Kiểm tra tình trạng còn phòng
        </button>
      </div>
      <div className="text-center mt-5 text-gray-500">
        <a href="#" className="underline">
          <i className="fa-solid fa-flag me-2"></i>
          Báo cáo nhà/phòng cho thuê này
        </a>
      </div>
    </div>
  );
};

export default BookRoom;
