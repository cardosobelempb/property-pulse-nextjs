import { i18n } from './i18n'

// ✅ Usando mensagens simples
console.log(i18n.errors.duplicateCheckin) 
// Output (pt): "Check-in já realizado anteriormente."

// ✅ Usando mensagens dinâmicas
console.log(i18n.getMessage('minLength', 'Password', 8))
// Output (pt): "Password deve ter no mínimo 8 caracteres."

console.log(i18n.getMessage('valueTooHigh', 'Age', 100))
// Output (pt): "Age deve ser menor ou igual a 100."

// ✅ Fallback para HTTP error
console.log(i18n.getHttpErrorMessage(404))
// Output (pt): "Recurso não encontrado."

console.log(i18n.getHttpErrorMessage(999))
// Output (pt): "Ocorreu um erro inesperado."

// ✅ Alterando idioma para inglês
i18n.setLocale('en')

console.log(i18n.errors.duplicateCheckin) 
// Output (en): "Check-in already performed previously."

console.log(i18n.getMessage('minLength', 'Password', 8))
// Output (en): "Password must be at least 8 characters."

console.log(i18n.getHttpErrorMessage(404))
// Output (en): "Resource not found."


6️⃣ ✅ Benefícios dessa abordagem

- Autocompletar no TypeScript — mensagens e seções tipadas.
- Suporte a mensagens dinâmicas (valueTooHigh, minLength, etc.) com argumentos.
- Fácil manutenção — basta adicionar novos idiomas ou novas chaves no - LocaleContentType.
- Fallback seguro — evita crashes se algum status HTTP ou chave não existir.
- Escalável — pronto para apps web, mobile ou backend.