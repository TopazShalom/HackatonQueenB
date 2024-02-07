"use client"
import MapButton from "./MapButton";
import React, { useState, useEffect } from "react";

const Map = () => {
  const userLevel = 4;
  const numberOfButtons = 20;

  /*
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  */
  const mapButtons = Array.from({ length: numberOfButtons }, (_, index) => {
    const requiredLevel = index + 1;
    return (
    
      <div>
        <MapButton
          key={index}
          userLevel={userLevel}
          requiredLevel={requiredLevel}
          // Use className instead of class
        />
      </div>
    );
  });

  return <div>{mapButtons}</div>;
};

export default Map;