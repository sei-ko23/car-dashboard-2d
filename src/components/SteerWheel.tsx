import React, { FC, useEffect, useRef } from "react";
//Helpers
import { DEFAULT_REFRESH_RATE } from "../Helpers";


const SteerWheel: FC<{ data: any }> = ({ data }) => {
  let imgRef: any = useRef()
  const setAngleValue = (value: number, duration: number) => {
    imgRef?.current.setAttribute('style', `transform:rotate(${value}deg)`);
    console.log(duration)
  };

  useEffect(() => {
    if (imgRef && data?.ANGLE_VOLANT) {
      setAngleValue(data?.ANGLE_VOLANT?.value, DEFAULT_REFRESH_RATE);
    }
  }, [data]);

  //render
  return (
    <div className="steerwheel">
      <img ref={imgRef} id="wheel" src={"../Assets/volant-peugeot.png"} alt="car_wheel" width="660" />
    </div>
  );
};

export { SteerWheel };
