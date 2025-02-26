import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout, { loader as layoutLoader } from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={layoutLoader}></Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
