import { Action } from 'redux';

interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

interface State {
  contatos: Contato[];
}

const initialState: State = {
  contatos: [],
};

// Definição dos tipos de actions
interface AddContatoAction extends Action {
  type: 'ADD_CONTATO';
  payload: Contato;
}

interface RemoveContatoAction extends Action {
  type: 'REMOVE_CONTATO';
  payload: number;
}

interface EditContatoAction extends Action {
  type: 'EDIT_CONTATO';
  payload: Contato;
}

// União dos tipos de actions possíveis
type ContatoActions = AddContatoAction | RemoveContatoAction | EditContatoAction;

// Implementação do reducer
export const contatoReducer = (state = initialState, action: ContatoActions): State => {
  switch (action.type) {
    case 'ADD_CONTATO':
      return { ...state, contatos: [...state.contatos, action.payload] };
    case 'REMOVE_CONTATO':
      return { ...state, contatos: state.contatos.filter(contato => contato.id !== action.payload) };
    case 'EDIT_CONTATO':
      return {
        ...state,
        contatos: state.contatos.map(contato =>
          contato.id === action.payload.id ? action.payload : contato
        ),
      };
    default:
      return state;
  }
};
