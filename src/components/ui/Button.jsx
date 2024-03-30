import Proptypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({ type= 'button', onClick, disable, children, isLoading=true}) {
  return (
    <div>
      <button
        type={type}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
            rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
        disabled={disable}
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
            {isLoading && (<LoadingSpinner classname='h-4 w-4'/>)}
            {children}
        </span>
      </button>
    </div>
  );
}

Button.propTypes = {
  disable: Proptypes.bool,
  children: Proptypes.node.isRequired,
  type: Proptypes.oneOf(['submit', 'reset', 'button']),
  onClick: Proptypes.func,
  isLoading: Proptypes.bool,
};
