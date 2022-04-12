import axios from "axios";
import launchFeedback from "./launchFeedback";
import store from "@/store";
/* Auxiliar para realizar peticiones. */
const MakeRequest = ({ path }) => {
  const options = {
    method: "GET",
    url: `https://api.coinpaprika.com/v1/${path}`,
  };
  store.dispatch("changeLoading", true);
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(function (response) {
        store.dispatch("changeLoading", false);
        resolve(response.data);
      })
      .catch(function (error) {
        store.dispatch("changeLoading", false);
        launchFeedback({
          title: "Error inesperado!",
          icon: "error",
        });
        reject(error);
      });
  });
};

export { MakeRequest };
