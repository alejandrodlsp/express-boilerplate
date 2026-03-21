import { AppDataSource } from "@src/data-source";
import { User } from "@entity/User";
import { Service } from "@services/Service";

type Params = { firstName: string; lastName: string; age: number };

/**
 * Única responsabilidad: crear un usuario nuevo.
 *
 * Uso:
 *   const user = await CreateUserService.initialize({ firstName: 'Ana', lastName: 'García', age: 30 })
 */
export class CreateUserService extends Service<Params, User> {
  private userRepository = AppDataSource.getRepository(User);

  async call({ firstName, lastName, age }: Params): Promise<User> {
    const user = this.userRepository.create({ firstName, lastName, age });
    return this.userRepository.save(user);
  }
}
