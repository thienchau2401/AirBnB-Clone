import React from "react";

const RoomLocation = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3.5">Nơi bạn sẽ đến</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125575.34821933648!2d107.04047759182006!3d10.40332803212888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756fd4554f0cf5%3A0xb24fd23bf641fa40!2sV%C5%A9ng%20T%C3%A0u%2C%20Ba%20Ria%20-%20Vung%20Tau%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700322425856!5m2!1sen!2s"
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="location"
      />
    </div>
  );
};

export default RoomLocation;
