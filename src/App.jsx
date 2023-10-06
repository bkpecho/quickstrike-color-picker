import { useState } from 'react';
import ColorList from './components/ColorList';
import ColorPreview from './components/ColorPreview';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <ColorList onSelectColor={handleSelectColor} />
      <ColorPreview selectedColor={selectedColor} />
    </div>
  );
}

export default App;
