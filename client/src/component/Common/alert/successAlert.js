import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";

export default function SuccessAlert(message) {
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message !== "") {
      setState(true);
      const timer = setTimeout(() => {
        dispatch({ type: "SUCCESS_ALERT", payload: "" });
      }, 3000);
      return () => clearTimeout(timer);
    } else setState(false);
  }, []);

  return (
    <div>
      <Snackbar
        open={state}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {message !== "" ? (
          <Alert severity="success" variant="filled">
            {message.message}
          </Alert>
        ) : null}
      </Snackbar>
    </div>
  );
}