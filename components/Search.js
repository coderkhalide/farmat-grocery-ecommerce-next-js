import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg md:flex items-center gap-2 lg:min-w-[650px] mx-4 hidden">
      <input
        type="text"
        placeholder="I'm searching for..."
        className="outline-none bg-transparent px-4 flex-1"
      />
      <AiOutlineSearch className="text-2xl text-gray-600" />
    </div>
  );
};

export default Search;
