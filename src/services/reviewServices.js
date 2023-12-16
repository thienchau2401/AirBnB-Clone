import { https } from "./config.js";

export const reviewServ = {
  getReviewByRoomId: (roomId) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${roomId}`, {
      params: { id: roomId },
    });
  },
};
