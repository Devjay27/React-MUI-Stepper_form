import React, { useState } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [data, setData] = useState({
    step: 1,
  });

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [occu, setOccu] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const nextStep = () => {
    setData({ step: data.step + 1 });
  };

  const prevStep = () => {
    setData({ step: data.step - 1 });
  };

  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const handleOccu = (e) => {
    setOccu(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const values = { first, last, occu, address, city };

  return (
    <div>
      {(() => {
        switch (data.step) {
          case 1:
            return (
              <UserDetails
                nextStep={nextStep}
                handleFirst={handleFirst}
                handleLast={handleLast}
                values={values}
              />
            );

          case 2:
            return (
              <PersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleOccu={handleOccu}
                handleAddress={handleAddress}
                handleCity={handleCity}
                values={values}
              />
            );
          case 3:
            return (
              <Confirm
                nextStep={nextStep}
                prevStep={prevStep}
                values={values}
              />
            );
          case 4:
            return <Success />;
          default:
            console.log("This is a multi-step form built with React.");
        }
      })()}
    </div>
  );
};

export default UserForm;
