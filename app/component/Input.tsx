interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  onSearchClick: () => void;
  onCurrentLocationClick: () => void;
}
export default function Input({
  handleSearch,
  setLocation,
  onSearchClick,
  onCurrentLocationClick,
}: InputProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-light-blue rounded-xl shadow-md w-full max-w-md">
      <label className="text-black text-xl font-bold mb-2" htmlFor="location">
        Enter a City Name
      </label>
      <div className="flex items-center w-full">
        <input
          type="text"
          id="location"
          placeholder="E.g., London, New York, Tokyo"
          className="w-full p-2 border rounded-l-lg border-none"
          onKeyDown={handleSearch}
          onChange={(e) =>
            setLocation(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <button
          className="p-2 font-bold bg-blue-500 text-white rounded-r-lg"
          onClick={onSearchClick}
        >
          Search
        </button>
      </div>
      <div className="flex items-center my-4 text-gray-500">
        <span className="mx-2 font-bold">or</span>
      </div>
      <button
        className="w-full py-2 font-bold bg-gray-500 text-white rounded-lg"
        onClick={onCurrentLocationClick}
      >
        Current Location
      </button>
    </div>
  );
}
