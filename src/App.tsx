type Props = {};
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./app/store";

function App(_props: Props) {
  return (
    <Provider store={store}>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  );
}

export default App;
