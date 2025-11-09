import { LocaleContentType } from "../types";

// Função auxiliar para mensagens dinâmicas
const format = (template: string, ...args: (string | number)[]) =>
  template.replace(/\{(\d+)\}/g, (_, index) => String(args[Number(index)]));

const pt: LocaleContentType = {
  messages: {
    required: "Este campo é obrigatório.",
    invalidEmail: "Digite um e-mail válido.",
    passwordMinLength: "A senha deve conter pelo menos 8 caracteres.",
    nameMinLength: "O nome deve conter pelo menos 1 caractere.",
    passwordMismatch: "As senhas não coincidem.",
    invalidPhone: "Digite um número de telefone válido.",
    invalidDate: "Data inválida.",
    dateInPast: "A data não pode estar no passado.",
    dateInFuture: "A data não pode estar no futuro.",
    alreadyExists: "Este valor já existe.",
    valueTooHigh: (field: string, max: number) =>
      format("{0} deve ser menor ou igual a {1}.", field, max),
    valueTooLow: (field: string, min: number) =>
      format("{0} deve ser maior ou igual a {1}.", field, min),
    invalidFormat: (field: string) =>
      format("O formato de {0} é inválido.", field),
    maxLength: (field: string, max: number) =>
      format("{0} deve ter no máximo {1} caracteres.", field, max),
    minLength: (field: string, min: number) =>
      format("{0} deve ter no mínimo {1} caracteres.", field, min),
  },
  placeholders: {
    name: "Digite seu nome",
    email: "Digite seu e-mail",
    password: "Digite sua senha",
    passwordConfirm: "Confirme sua senha",
    phone: "Digite seu telefone",
  },
  titles: {
    login: "Entrar",
    register: "Cadastrar-se",
    forgotPassword: "Recuperar Senha",
    profile: "Perfil do Usuário",
  },
  descriptions: {
    login: "Acesse sua conta com seu e-mail e senha.",
    register: "Crie uma conta preenchendo os campos abaixo.",
    forgotPassword: "Informe seu e-mail para recuperar sua senha.",
    profile: "Atualize suas informações pessoais.",
  },
  buttons: {
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Salvar",
    delete: "Excluir",
    back: "Voltar",
    register: "Registrar",
    login: "Login",
  },
  errors: {
    serverError: "Erro interno do servidor. Tente novamente mais tarde.",
    networkError: "Erro de conexão. Verifique sua internet.",
    notFound: "Recurso não encontrado.",
    forbidden: "Você não tem permissão para acessar este recurso.",
    unauthorized: "Sessão expirada. Faça login novamente.",
    timeout: "Tempo limite excedido. Tente novamente.",
    validationFailed: "Alguns campos estão inválidos.",
    unknown: "Ocorreu um erro inesperado.",
    duplicateCheckin: "Check-in já realizado anteriormente.",
  },
  httpErrors: {
    400: "Requisição inválida.",
    401: "Não autorizado. Faça login.",
    403: "Acesso negado.",
    404: "Recurso não encontrado.",
    409: "Conflito de dados.",
    422: "Erro de validação. Verifique os campos.",
    429: "Muitas requisições. Tente novamente em instantes.",
    500: "Erro interno do servidor.",
    502: "Erro de gateway.",
    503: "Serviço temporariamente indisponível.",
    504: "Tempo de resposta excedido pelo servidor.",
  },
  labels: {
    name: "Nome",
    email: "Email",
    password: "Senha",
    passwordConfirm: "Confirme sua senha",
    phone: "Telefone",
  },
};

export default pt;
