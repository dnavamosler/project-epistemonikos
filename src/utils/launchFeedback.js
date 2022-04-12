import vue from "vue";

/* this utility displays an alert to give feedback to the user  */
const launchFeedback = ({ title, text, icon = "success" }) => {
  return new Promise((resolve, reject) => {
    vue
      .swal({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
        cancelButtonText: "No",
      })
      .then((result) => {
        if (result.isConfirmed) {
          resolve();
        } else {
          reject();
        }
      });
  });
};

export default launchFeedback;
