/**
 * Clase base abstracta para servicios de única responsabilidad.
 *
 * P = tipo de los parámetros de entrada (por defecto void)
 * R = tipo del resultado de salida (por defecto void)
 *
 * Patrón:
 *   - `initialize(params)` → factory estático: crea la instancia y ejecuta call
 *   - `call(params)`       → lógica de negocio
 */
export abstract class Service<P = void, R = void> {
  /**
   * Factory estático — crea la instancia y ejecuta `call` de una vez
   *
   * Uso: const result = await GetUsersService.initialize()
   *      const result = await CreateUserService.initialize({ name: 'Ana' })
   */
  static async initialize<P, R>(params?: P): Promise<R> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instance = new (this as any)() as Service<P, R>;
    return instance.call(params as P);
  }

  /**
   * Lógica de negocio pura.
   * Recibe parámetros tipados, retorna un resultado tipado.
   */
  abstract call(params: P): Promise<R>;
}
