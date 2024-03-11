import './App.css';
import Paragrafo from './components/paragrafo/Paragrafo'
import Button from './components/button/Button'

const showLabel = (label) => {
  alert(`A label desse botão é ${label}`)
}

function App() {
  return (
      <div className='content'>
        <Paragrafo />
        <Button showLabel={showLabel} />
      </div>
  )
}

export default App;
