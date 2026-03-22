import { AppDataSource } from "@src/data-source";
import { User } from "@entity/User";
import { Service } from "@services/Service";

type Params = { firstName: string; lastName: string; email: string };

/**
 * Única responsabilidad: crear un usuario nuevo.
 *
 * Uso:
 *   const user = await CreateUserService.initialize({ firstName: 'Ana', lastName: 'García', email: 30 })
 */
export class CreateUserService extends Service<Params, User> {
  private userRepository = AppDataSource.getRepository(User);

  async call({ firstName, lastName, email }: Params): Promise<User> {
    const user = this.userRepository.create({ firstName, lastName, email });
    return this.userRepository.save(user);
  }
}
