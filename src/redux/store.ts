import { createStore } from 'redux';
import { contatoReducer } from './contatoSlice';

const store = createStore(contatoReducer);

export default store;
