import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    if (isLogged !== true) {
      navigate("/");
    }
  }, []);

  return <div>{isLogged ? children : null}</div>;
};

export default Protectedroutes;
