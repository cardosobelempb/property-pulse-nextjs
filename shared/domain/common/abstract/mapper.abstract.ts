/**
 * Classe base genérica para mapeadores de entidades.
 *
 * Usa generics para definir os tipos de Domínio e Persistência.
 * Serve como contrato simples para subclasses que mapeiam
 * entre entidades de domínio e modelos de persistência (ex: Prisma).
 */
export abstract class AbstractMapper<Domain, Persistence> {
  /**
   * Converte o modelo de persistência (ex: Prisma) para o domínio.
   * Deve ser implementado pela subclasse.
   */
  static toDomain<Domain, Persistence>(_raw: Persistence): Domain {
    throw new Error("Método toDomain() deve ser implementado pela subclasse.");
  }

  /**
   * Converte o modelo de domínio para o modelo de persistência (ex: Prisma).
   * Deve ser implementado pela subclasse.
   */
  static toPersistence<Domain, Persistence>(_domain: Domain): Persistence {
    throw new Error(
      "Método toPersistence() deve ser implementado pela subclasse."
    );
  }
}
