import React, { useState } from "react";
import RoomMoreInfoDialog from "../RoomMoreInfoDialog/RoomMoreInfoDialog";
import "./roomNeedToKnow.scss";

const RoomNeedToKnow = () => {
  const [hasRender, setRender] = useState([false, false]);
  const onShow = (isDisplay, index) => {
    const lstRender = [...hasRender];
    lstRender[index] = isDisplay;
    setRender(lstRender);
  };
  const listData = [
    {
      id: 1,
      title: "Nội quy nhà",
      description:
        "Vì nơi bạn ở là nhà riêng của người khác nên hãy cẩn thận và tôn trọng khi sử dụng nhé.",
      rules: [
        {
          subID: 1,
          subTitle: "Nhận và trả phòng",
          subList: [
            {
              lstID: 1,
              icon: "fa-regular fa-clock",
              content: "Nhận phòng sau 15:00",
            },
            {
              lstID: 2,
              icon: "fa-regular fa-clock",
              content: "Trả phòng trước 11:00",
            },
          ],
        },
        {
          subID: 2,
          subTitle: "Trong thời gian ở",
          subList: [
            {
              lstID: 1,
              icon: "fa-solid fa-ban",
              content: "Không được phép mang theo thú cưng",
            },
            {
              lstID: 2,
              icon: "fa-regular fa-moon",
              content: "Khung giờ cần giữ yên lặng\n22:00 - 08:00",
            },
            {
              lstID: 3,
              icon: "fa-solid fa-volume-xmark",
              content: "Không được tổ chức tiệc hoặc sự kiện",
            },
            {
              lstID: 4,
              icon: "fa-solid fa-video-slash",
              content: "Không cho phép chụp ảnh vì mục đích thương mại",
            },
            {
              lstID: 5,
              icon: "fa-solid fa-ban-smoking",
              content: "Không hút thuốc",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "An toàn và chỗ ở",
      description:
        "Tránh bị bất ngờ bằng cách kiểm tra những thông tin quan trọng sau đây về khu nhà của Chủ nhà.",
      rules: [
        {
          subID: 1,
          subTitle: "Thiết bị an toàn",
          subList: [
            {
              lstID: 1,
              icon: "fa-solid fa-circle-radiation",
              content: "Đã lắp máy phát hiện khí CO",
            },
            {
              lstID: 2,
              icon: "fa-solid fa-group-arrows-rotate",
              content: "Đã lắp máy báo khói",
            },
          ],
        },
      ],
    },
  ];

  const renderUI = (lstData) => {
    let render = lstData.map((data, index) => {
      const lstRule = [...data.rules];
      const firstRule = lstRule[0].subList[0];
      const secondRule = lstRule[0].subList[1];
      return (
        <div key={data.id} className="item">
          <h4 className="font-semibold">{data.title}</h4>
          <p className="description">{firstRule.content}</p>
          <p className="description">{secondRule.content}</p>
          <button
            className="font-semibold readMore"
            onClick={() => onShow(true, index)}
          >
            Hiển thị thêm<i className="fa-solid fa-chevron-right"></i>
          </button>
          {hasRender[index] && (
            <RoomMoreInfoDialog toggle={onShow} data={data} index={index} />
          )}
        </div>
      );
    });
    return render;
  };

  return (
    <div className="needToKnow">
      <h3 className="font-semibold text-xl">Những điều cần biết</h3>
      <div className="grid grid-cols-3 my-4 needToKnowContent">
        <div className="col-span-2 grid grid-cols-2 needToKnowItem">
          {renderUI(listData)}
        </div>
        <div>
          <h4 className="font-semibold">Chính sách hủy</h4>
          <p className="description">
            Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính sách hủy
            cho đặt phòng này.
          </p>
          <button className="font-semibold readMore">
            Thêm ngày<i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomNeedToKnow;
