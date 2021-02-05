
import './App.css';

function ColorBox(props) {
  const [color, setColor]= useState('deeppink');

  function handleBoxClick() {
    const randomColor= getRandomColor();
    setColor(randomColor);
  }
}
function App() {
  return (
    <div className="App"
    style={{ backgroundColor: color}}
    onClick={handleBoxClick}>
      
    </div>
  );
}

export default App;
