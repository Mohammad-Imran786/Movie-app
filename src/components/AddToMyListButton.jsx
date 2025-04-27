import { useMyList } from "../contexts/MyListContext";

const AddToMyListButton = ({ movie }) => {   // Accept movie as a prop
  
  const { addToMyList } = useMyList();        // Call hook inside the component

  return (
    <button
      onClick={() => addToMyList(movie)}
      className="bg-blue-600 hover:bg-blue-700 text-white font-lg py-2 px-4 rounded-full mt-8 cursor-pointer"
    >
      ➕ Add to My List
    </button>
  );
};

export default AddToMyListButton;
