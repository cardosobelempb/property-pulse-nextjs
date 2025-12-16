import { NextRequest } from "next/server";

/**
 * Extrai o ID da URL de forma segura.
 */
export function extractId(request: NextRequest): string | null {
  const segments = new URL(request.url).pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
}
