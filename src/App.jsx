import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout, { loader as layoutLoader } from "./components/Layout";
import ProjectList from "./components/projects/ProjectList";
import Project from "./components/projects/Project";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={layoutLoader}>
      <Route index element={<ProjectList />} />
      <Route path="projects/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
