import { useMyList } from "../contexts/MyListContext";

const AddToMyListButton = ({ movie }) => {

    const { addToMyList } = useMyList();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-lg py-2 px-4 rounded-full mt-8 cursor-pointer"
            onClick={() => addToMyList(movie)}
        >
            ➕ Add to My List
        </button>
    )
};

export default AddToMyListButton;
