
//--------------------------------------------------

export const Nome = (valor) => {
  if (valor !== undefined && valor !== null && valor.trim() !== '') {}
};

export const Sobrenome = (valor) => {
  if (valor !== undefined && valor !== null) {}
};

const validacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const Email = (valor) => {
  if (validacaoEmail.test(valor)) {}
};

const validacaoTelefone = /^(\()?\d{2}(\))?(-|\s)?\d{4}(-|\s)\d{4}$/;
export const Telefone = (valor) => {
  if (validacaoTelefone.test(valor)) {}
}

//--------------------------------------------------
