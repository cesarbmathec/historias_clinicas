type Props = {};
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./app/store";
import { Suspense } from "react";
import { Box, LinearProgress } from "@mui/material";

function App(_props: Props) {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <LinearProgress color="secondary" />
          </Box>
        }
      >
        <RouterProvider router={Router} />
      </Suspense>
    </Provider>
  );
}

export default App;
