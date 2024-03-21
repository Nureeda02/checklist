import React from "react";

const CheckInResult = ({ name, lastName, studentId, checkInTime }) => {
  return (
    <div>
      <p>
        เช็คชื่อเรียบร้อยแล้วสำหรับ {name} {lastName} (รหัสนักศึกษา: {studentId}) เวลา{" "}
        {checkInTime}
      </p>
    </div>
  );
};

export default CheckInResult;
