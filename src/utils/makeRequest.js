import axios from "axios";
import launchFeedback from "./launchFeedback";

/* Auxiliar para realizar peticiones. */
const MakeRequest = ({ path }) => {
  const options = {
    method: "GET",
    url: `https://api.coinpaprika.com/v1/${path}`,
  };
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        launchFeedback({
          title: "Error inesperado!",
          icon: "error",
        });
        reject(error);
      });
  });
};

export { MakeRequest };
