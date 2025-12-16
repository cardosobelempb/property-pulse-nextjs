import { NextRequest } from "next/server";

export namespace CategoryValid {
  export interface Input {
    id: string;
    name: string;
    description: string;
  }

  export interface OutPut {}
}
/**
 * Extrai o ID da URL de forma segura.
 */
export function extractId(request: NextRequest): string | null {
  const segments = new URL(request.url).pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
}

/**
 * Validação básica de entrada (Fail Fast)
 */
export function categoryValid(
  id: string | null,
  input: CategoryValid.Input
): string | null {
  if (!id) return "O ID da categoria é obrigatório.";
  if (!input.name || !input.description)
    return "Nome e descrição são obrigatórios.";
  return null;
}
