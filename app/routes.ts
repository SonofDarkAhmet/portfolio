import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/Layout.tsx", [
    index("./components/projects/ProjectList.tsx"),
    route("/projects/:id", "./components/projects/Project.tsx"),
  ]),
  route("*", "./routes/NotFound.tsx"),
] satisfies RouteConfig;
