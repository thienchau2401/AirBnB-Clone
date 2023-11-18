import React from "react";
import RoomOwner from "../../Components/RoomOwner/RoomOwner";
import RoomNeedToKnow from "../../Components/RoomNeedToKnow/RoomNeedToKnow";
import RoomLocation from "../../Components/RoomLocation/RoomLocation";

const Room = () => {
  return (
    <div className="container mx-auto">
      <RoomLocation />
      <hr className="my-5" />
      <RoomOwner />
      <hr className="my-5" />
      <RoomNeedToKnow />
    </div>
  );
};

export default Room;
