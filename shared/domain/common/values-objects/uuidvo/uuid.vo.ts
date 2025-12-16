import { BadRequestError } from "../../errors";
import { AbstractValueObject } from "../AbstractValueObject";

/**
 * 🎯 Responsabilidade única:
 * Representar e validar um UUID v4 imutável
 */
export class UUIDVO extends AbstractValueObject<string> {
  private static readonly UUIDV4_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  /**
   * 🔨 Fábrica estática para criar instâncias validadas.
   * @param uuid - UUIDv4 válido ou undefined (gera automaticamente)
   * @throws BadRequestError se o UUID for inválido
   */
  public static create(uuid?: string): UUIDVO {
    const normalizedUUID = UUIDVO.normalize(uuid) ?? UUIDVO.generate();

    if (!UUIDVO.isValid(normalizedUUID)) {
      throw new BadRequestError(`Invalid UUIDv4 format: "${normalizedUUID}"`);
    }

    return new UUIDVO(normalizedUUID);
  }

  /** 🔒 Construtor privado: força uso do método create */
  private constructor(uuid: string) {
    super(uuid); // delega para a classe base a imutabilidade
  }

  /** 🧪 Implementação do contrato de validação */
  public isValid(): boolean {
    return UUIDVO.isValid(this.value);
  }

  /**
   * ⚙️ Gera um UUIDv4 válido (criptograficamente seguro)
   */
  public static generate(): string {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
    }

    // Fallback para ambientes sem crypto
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /** 🧩 Verifica se o formato de UUIDv4 é válido */
  public static isValid(uuid: string): boolean {
    if (!uuid) return false;
    return UUIDVO.UUIDV4_REGEX.test(uuid.trim().toLowerCase());
  }

  /** 🧹 Normaliza o UUID removendo prefixos como 'urn:uuid:' */
  private static normalize(uuid?: string): string | null {
    if (!uuid) return null;
    return uuid
      .replace(/^urn:uuid:/i, "")
      .trim()
      .toLowerCase();
  }
}
