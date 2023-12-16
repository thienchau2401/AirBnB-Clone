import React, { useEffect } from "react";
import RoomOwner from "../../Components/RoomOwner/RoomOwner";
import RoomNeedToKnow from "../../Components/RoomNeedToKnow/RoomNeedToKnow";
import RoomLocation from "../../Components/RoomLocation/RoomLocation";
import RoomDetails from "../../Components/RoomDetail/RoomDetails";
import { useDispatch } from "react-redux";
import { getRoomInfoApi } from "../../redux/slices/roomSlice";
import { useParams } from "react-router-dom";
import { getReviewByRoomIdApi } from "../../redux/slices/reviewSlice";
import Review from "../../Components/Review/Review";
import "./room.scss";

const Room = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomInfoApi(params.id));
  }, []);
  useEffect(() => {
    dispatch(getReviewByRoomIdApi(params.id));
  }, []);

  return (
    <div className="lg:container lg:mx-auto md:mx-auto roomPage">
      <RoomDetails />
      <hr className="my-5" />
      <Review />
      <hr className="my-5" />
      <RoomLocation />
      <hr className="my-5" />
      <RoomOwner />
      <hr className="my-5" />
      <RoomNeedToKnow />
    </div>
  );
};

export default Room;
