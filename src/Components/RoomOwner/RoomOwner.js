import React, { useState } from "react";
import "./roomOwner.scss";

const RoomOwner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="roomOwner">
      <div className="owner flex">
        <div className="imgOwner">
          <img src={"./../img/owner.jpg"} alt="owner.jpg" />
        </div>
        <div className="ownerInfo">
          <h3 className="font-semibold text-xl">Chủ nhà Martina</h3>
          <p className="text-gray-500">Đã tham gia vào tháng 9 năm 2022</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14">
        <div>
          <div className="review my-4">
            <div className="flex gap-7">
              <div>
                <i className="fa-solid fa-star me-4"></i>
                1.197 đánh giá
              </div>
              <div>
                <i className="fa-solid fa-user-check me-4"></i>
                Đã xác minh danh tính
              </div>
            </div>
            <div className="mt-1">
              <i className="fa-solid fa-award me-4"></i>
              Chủ nhà siêu cấp
            </div>
          </div>
          <div className="mb-4">
            <p className={`main-class ${isOpen ? null : "description"}`}>
              Xin chào, <br />
              Tôi là Martina và cùng với nhóm tại Silkhaus, chúng tôi làm việc
              hàng ngày để làm cho thời gian ở của bạn đáng nhớ. Tôi là một
              người Ý đã chuyển đến Dubai vài năm trước và tôi yêu thành phố
              này! Mẹo của tôi cho bạn là đến và để chúng tôi ở Silkhaus chăm
              sóc tốt cho bạn trong các căn hộ sẵn sàng hỗ trợ của chúng tôi.
              <br />
              Tôi chắc chắn bạn sẽ thích thời gian lưu trú của mình với chúng
              tôi!
            </p>
            <button className="readMore" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Ẩn" : "Tìm hiểu thêm"}
            </button>
          </div>
          <div className="roomCoOwner">
            <p className="font-semibold text-lg">Đồng chủ nhà/Đồng tổ chức</p>
            <div className="coOwner flex my-1.5">
              <div className="imgCoOwner">
                <img src={"./../img/co-worker.jpg"} alt="co-worker.jpg" />
              </div>
              <p>Paul</p>
            </div>
            <p className="font-semibold mb-1.5">
              Martina là một Chủ nhà siêu cấp
            </p>
            <p>
              Chủ nhà siêu cấp là những người có kinh nghiệm, được đánh giá cao
              và cam kết mang lại kỳ nghỉ tuyệt vời cho khách.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-1.5">Số đăng ký: DOW-SOU-2DLC3</p>
          <p className="mb-1.5">Ngôn ngữ: English, Italiano</p>
          <p className="mb-1.5">Tỉ lệ phản hồi: 100%</p>
          <p>Thời gian phản hồi: trong vòng một giờ</p>
          <button className="contactOwner">Liên hệ với chủ nhà</button>
          <div className="warning">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span className="text-sm">
              Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền
              hoặc liên lạc bên ngoài trang web hoặc ứng dụng Airbnb.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomOwner;
