"use client";
import React, { useEffect, useState } from "react";

function CountDownTimer({ targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime - Date.now());
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [sec, setSec] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetTime - Date.now();
      if (remaining > 0) {
        setTimeRemaining(remaining);
      } else {
        clearInterval(interval);
        setTimeRemaining(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  useEffect(() => {
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    setSec(seconds);
    setMins(minutes);
    setHours(hours);
  }, [timeRemaining]);

  return (
    <div className="flex items-center gap-1 text-white bg-orange py-2 px-4 rounded w-fit">
      {timeRemaining <= 0 ? (
        <h5 className="text-sm font-semibold mr-2">Expired Offer</h5>
      ) : (
        <>
          <h5 className="text-sm font-semibold mx-2">Expires in:</h5>
          <h4 className="hours font-semibold w-8 text-centre">
            {hours.toString().padStart(2, "0")} :{" "}
          </h4>
          <h4 className="time font-semibold w-8 text-centre">
            {mins.toString().padStart(2, "0")} :{" "}
          </h4>
          <h4 className="second font-semibold w-6">
            {sec.toString().padStart(2, "0")}
          </h4>
        </>
      )}
    </div>
  );
}

export default CountDownTimer;
