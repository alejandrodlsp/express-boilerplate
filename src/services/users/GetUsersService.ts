import { AppDataSource } from "@src/data-source";
import { User } from "@entity/User";
import { Service } from "@services/Service";

/**
 * Única responsabilidad: obtener la lista de usuarios.
 *
 * Uso desde un controller:
 *   const users = await GetUsersService.initialize()
 *
 * Uso con .call explícito:
 *   const service = new GetUsersService()
 *   const users = await service.call()
 */
export class GetUsersService extends Service<void, User[]> {
  private userRepository = AppDataSource.getRepository(User);

  async call(): Promise<User[]> {
    return this.userRepository.find();
  }
}
