import { IServiceError } from '@/shared'
export class DuplicateError extends Error implements IServiceError {
  constructor(message: string) {
    super(message)
    this.name = 'DuplicateError'
  }
}
