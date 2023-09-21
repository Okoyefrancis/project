import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Block/Layout";
import HomeScreen from "../Pages/HeroScreen";
// import Upload from "../Pages/Upload";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },

  // {
  //   path:"/upload-book",
  //   element: <Upload/>,
  // }
]);
