import { useReducer, useState } from 'react';

// { contador:  0 }

const inicial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    case 'set':
      return { contador: action.payload };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);

  return (
    <div>
      contador: {state.contador}
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={() => dispatch({ type: 'incrementar' })}>Mas</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
      <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set</button>
    </div>
  );
};

export default App;
