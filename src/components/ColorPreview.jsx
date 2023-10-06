/* eslint-disable react/prop-types */
import { getLuminance } from 'polished';

const ColorPreview = ({ selectedColor }) => {
  // Calculate the hex color code
  const hex = selectedColor && `#${selectedColor.hex_code}`;

  // Determine the background and text color based on luminance
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
          {/* Display the color name */}
          <p className="font-bold text-xl mb-2">Name:</p>
          <p className="text-lg">{selectedColor.name}</p>

          {/* Display the hex code */}
          <p className="font-bold text-xl mt-4 mb-2">Hex:</p>
          <p className="text-lg">{selectedColor.hex_code}</p>

          {/* Display the color code */}
          <p className="font-bold text-xl mt-4 mb-2">Color Code:</p>
          <p className="text-lg">{selectedColor.color_code}</p>
        </div>
      ) : (
        // Display a message when no color is selected
        <p className="font-bold text-lg mb-2">Select a Color to Preview</p>
      )}
    </div>
  );
};

export default ColorPreview;
