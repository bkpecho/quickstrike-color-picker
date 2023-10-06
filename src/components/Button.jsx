/* eslint-disable react/prop-types */
const Button = ({ onSelectColor, color }) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      onClick={() => onSelectColor(color)}
    >
      Preview
    </button>
  );
};

export default Button;
