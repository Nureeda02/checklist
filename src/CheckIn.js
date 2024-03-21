const handleCheckIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCheckInTime(currentTime);
  
    fetch("saveData.php", {
        method: "POST",
        body: JSON.stringify({
          Id: Id, // ตรวจสอบว่าตรงกับชื่อใน PHP
          fname: fname, // ตรวจสอบว่าตรงกับชื่อใน PHP
          lname: lname, // ตรวจสอบว่าตรงกับชื่อใน PHP
          major: major, // ตรวจสอบว่าตรงกับชื่อใน PHP
          checkInTime: currentTime, // ตรวจสอบว่าตรงกับชื่อใน PHP
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
  