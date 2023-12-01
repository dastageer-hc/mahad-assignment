
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainComponentProps from './components/MainComponent/MainComponent'

function App() {

 return(<>
 <Routes>
   <Route path='/' Component={MainComponentProps}>
   </Route>
 </Routes>
 </>)
}

export default App
