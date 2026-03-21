import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "index",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "show",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "create",
  },
];
