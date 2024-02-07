"use client"
import React, { useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";

const MapButton = ({ userLevel, requiredLevel }) => {
  const [reachable, setreachable] = useState(userLevel >= requiredLevel);
  const router = useRouter();

  const handleClick = () => {
    if (reachable === true) {
      // Conditionally handle click based on 'reachable' state
      router.push("../game");
    } else {
      // 'reachable' is not true, need to chang
      console.error("Error: The operation is not reachable.");
      // You can also display an error message to the user
    }
  };

  return (
    <button
      onClick={handleClick}
      className={reachable === true ? "reachableButton" : "unreachableButton"}
    >
      {requiredLevel}
    </button>
  );
};

export default MapButton;
