import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";

export default function ErrorAlert(message) {
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message !== "") {
      setState(true);
      const timer = setTimeout(() => {
        dispatch({ type: "ERROR_ALERT", payload: "" });
      }, 1000);
      return () => clearTimeout(timer);
    } else setState(false);
  }, []);

  return (
    <div>
      <Snackbar
        open={state}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {message !== "" ? (
          <Alert variant="filled" severity="error">
            {message.message}
          </Alert>
        ) : null}
      </Snackbar>
    </div>
  );
}