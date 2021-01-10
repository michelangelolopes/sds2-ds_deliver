import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Routes from './Routes';

//jsx permite usar o código html no typescript

function App() {
  return (
      <>
        <Routes />
        <ToastContainer />
      </>
  );
}

export default App;
