type Props = {};
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Router from "./router";

function App(_props: Props) {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
