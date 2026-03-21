import { AppDataSource } from "@src/data-source";
import { User } from "@entity/User";
import { Service } from "@services/Service";

type Params = { id: number };

/**
 * Única responsabilidad: obtener un usuario por su id.
 *
 * Uso:
 *   const user = await GetUserByIdService.initialize({ id: 1 })
 */
export class GetUserByIdService extends Service<Params, User | null> {
  private userRepository = AppDataSource.getRepository(User);

  async call({ id }: Params): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
