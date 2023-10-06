/* eslint-disable react/prop-types */
import { getLuminance } from 'polished';

const ColorPreview = ({ selectedColor }) => {
  const hex = selectedColor && `#${selectedColor.hex_code}`;

  const style = selectedColor
    ? {
        backgroundColor: hex,
        color: getLuminance(hex) > 0.5 ? 'black' : 'white',
      }
    : {
        backgroundColor: 'white',
        color: 'black',
      };

  return (
    <div className="flex-1 p-4 flex items-center justify-center" style={style}>
      {selectedColor ? (
        <div>
          <p className="font-bold text-xl mb-2">Name:</p>
          <p className="text-lg">{selectedColor.name}</p>

          <p className="font-bold text-xl mt-4 mb-2">Hex:</p>
          <p className="text-lg">{selectedColor.hex_code}</p>

          <p className="font-bold text-xl mt-4 mb-2">Color Code:</p>
          <p className="text-lg">{selectedColor.color_code}</p>
        </div>
      ) : (
        <p className="font-bold text-lg mb-2">Select a Color to Preview</p>
      )}
    </div>
  );
};

export default ColorPreview;
