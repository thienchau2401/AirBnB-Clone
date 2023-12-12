import { https } from "./config";

export const quanLyPhongServ = {
    getPhong: () => {
        return https.get('/api/phong-thue');
    },
};