import React, { useState } from "react";
import "./App.css";

const CheckInSystem = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [major, setMajor] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleCheckIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCheckInTime(currentTime);

    // ส่งข้อมูลไปยังไฟล์ PHP สำหรับบันทึกข้อมูล
    fetch("saveData.php", {
      method: "POST",
      body: JSON.stringify({
        studentId: studentId,
        name: name,
        lastName: lastName,
        major: major,
        checkInTime: currentTime,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // แสดงผลลัพธ์จากการบันทึกข้อมูล
        setCheckedIn(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="check-in-container">
      <h2>ระบบเช็คชื่อ</h2>
      <label>
        รหัสนักศึกษา:
        <input type="text" value={studentId} onChange={handleStudentIdChange} />
      </label>
      <br />
      <label>
        ชื่อ:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        นามสกุล:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        สาขาที่เรียน:
        <input type="text" value={major} onChange={handleMajorChange} />
      </label>
      <br />
      <button onClick={handleCheckIn}>Check In</button>
      {checkedIn && (
        <p>
          เช็คชื่อเรียบร้อยแล้วสำหรับ {name} {lastName} (รหัสนักศึกษา: {studentId}) เวลา{" "}
          {checkInTime}
        </p>
      )}
    </div>
  );
};

export default CheckInSystem;
