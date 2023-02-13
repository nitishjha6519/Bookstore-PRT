import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  let tokenCookie = document.cookie;

  let token = tokenCookie.split("token=")[1];
  console.log(token);
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      navigate("/");
    }
  }, []);

  return <div>{isLogged ? children : null}</div>;
};

export default Protectedroutes;
