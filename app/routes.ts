import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/Layout.tsx"),
  route("*", "./routes/NotFound.tsx"),
] satisfies RouteConfig;
