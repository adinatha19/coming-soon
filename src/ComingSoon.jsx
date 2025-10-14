import React, { useEffect, useState } from "react";
import "./ComingSoon.css"; // for optional styling

function ComingSoon() {
  const launchDate = new Date("2025-10-20T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <h1>🎉 We're Live!</h1>;
  }

  return (
    <div className="coming-soon-container">
      <h1>🚧 Coming Soon 🚧</h1>
      <p>We're launching something amazing. Stay tuned!</p>
      <div className="countdown">
        <div>
          <span>{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
