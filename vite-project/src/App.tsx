import Cabecalho from './components/cabecalho';
import Cartao from './components/cartao';

function App() {
  return (
    <div>
      <Cabecalho />
      <Cartao numero={1} />
      <Cartao numero={2} />
      <Cartao numero={3} />
    </div>
  );
}

export default App
