import { https } from "./config.js";

export const roomServ = {
  getRoomInfo: (roomId) => {
    return https.get(`/api/phong-thue/${roomId}`, { params: { id: roomId } });
  },
};
