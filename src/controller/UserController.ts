import { Request, Response } from "express";
import { GetUsersService } from "../services/users/GetUsersService";
import { GetUserByIdService } from "../services/users/GetUserByIdService";
import { CreateUserService } from "../services/users/CreateUserService";

export class UserController {
  // GET /users
  async index(req: Request, res: Response) {
    const users = await GetUsersService.initialize();
    res.json(users);
  }

  // GET /users/:id
  async show(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await GetUserByIdService.initialize({ id });

    if (!user)
        return res.status(404).json({ message: "User not found" });

    return res.json(user);
  }

  // POST /users
  async create(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;
    const user = await CreateUserService.initialize({ firstName, lastName, email });

    res.status(201).json(user);
  }
}
