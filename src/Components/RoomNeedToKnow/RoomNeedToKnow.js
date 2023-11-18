import React, { useState } from "react";
import RoomMoreInfoDialog from "../RoomMoreInfoDialog/RoomMoreInfoDialog";

const RoomNeedToKnow = () => {
  const [hasRender, setRender] = useState(false);
  const [hasRender1, setRender1] = useState(false);
  const onShow = (isDisplay, flag) => {
    if (flag) {
      setRender(!isDisplay);
    } else {
      setRender1(!isDisplay);
    }
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

  return (
    <div className="needToKnow">
      <h3 className="font-semibold text-xl">Những điều cần biết</h3>
      <div className="grid grid-cols-3 my-4">
        <div>
          <h4 className="font-semibold">Nội quy nhà</h4>
          <p className="description">Nhận phòng sau 15:00</p>
          <p className="description">Trả phòng trước 11:00</p>
          <button
            className="font-semibold readMore"
            onClick={() => {
              setRender(!hasRender);
            }}
          >
            Hiển thị thêm<i className="fa-solid fa-chevron-right"></i>
          </button>
          {hasRender && (
            <RoomMoreInfoDialog
              toggle={onShow}
              data={listData[0]}
              firstItem={true}
            />
          )}
        </div>
        <div>
          <h4 className="font-semibold">An toàn và chỗ ở</h4>
          <p className="description">Máy phát hiện khí CO</p>
          <p className="description">Máy báo khói</p>
          <button
            className="font-semibold readMore"
            onClick={() => {
              setRender1(!hasRender1);
            }}
          >
            Hiển thị thêm<i className="fa-solid fa-chevron-right"></i>
          </button>
          {hasRender1 && (
            <RoomMoreInfoDialog
              toggle={onShow}
              data={listData[1]}
              firstItem={false}
            />
          )}
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
