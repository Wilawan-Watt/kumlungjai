
function KLJ_Button({ label, onClick, color = '' }) {
    const colorClasses = {
        color_1: "bg-blue-500 hover:bg-blue-700",
        color_2: "bg-green-500 hover:bg-green-700",
        color_3: "bg-purple-500 hover:bg-purple-700",
        color_4: "bg-amber-500 hover:bg-amber-700",
      };

    return (
        <button
            onClick={onClick}
            className={`${colorClasses[color]} text-white font-semibold py-2 px-4 rounded transition duration-300 cursor-pointer`}
        >
            {label}
        </button>
    );
}

export default KLJ_Button