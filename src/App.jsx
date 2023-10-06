import { useState } from 'react';
import ColorList from './components/ColorList';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <ColorList onSelectColor={handleSelectColor} />
    </div>
  );
}

export default App;
