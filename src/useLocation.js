import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),

      err => setErrorMessage(err.message)
    );
  }, []); // only called once as class does need ComponentDidUpdate

  // non hook style return -> return { lat: lat, errorMessage: errorMessage}

  // Hook convention is to return insside an array
  return [lat, errorMessage];
};
