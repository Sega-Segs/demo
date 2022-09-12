import './App.css';
import MenuAppBar from './Navbar';
import LabelBottomNavigation from './Footer';
import ActionAreaCard from './Card';

function App() {
  return (
    <div className="App">
       
        <MenuAppBar></MenuAppBar>
        <ActionAreaCard></ActionAreaCard>
        <LabelBottomNavigation />
        
    </div>
  );
}

export default App;