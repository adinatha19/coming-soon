import React, { useEffect, useState, useCallback } from "react";
import "./ComingSoon.css";

function ComingSoon() {
  const calculateTimeLeft = useCallback(() => {
    const launchDate = new Date("2025-10-20T23:59:59"); // ✅ defined here
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []); // ✅ no launchDate dependency

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return <h1>🎉 We're Live!</h1>;
  }

  return (
    <div className="coming-soon-container">
      <h1>🚧 Coming Soon 🚧</h1>
      <p>We're launching something amazing. Stay tuned!!</p>
      <div className="countdown">
        <div><span>{timeLeft.days}</span><span>Days</span></div>
        <div><span>{timeLeft.hours}</span><span>Hours</span></div>
        <div><span>{timeLeft.minutes}</span><span>Minutes</span></div>
        <div><span>{timeLeft.seconds}</span><span>Seconds</span></div>
      </div>
    </div>
  );
}

export default ComingSoon;
