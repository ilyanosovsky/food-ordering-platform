import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        User searched for {city}
    </div>
  );
};

export default SearchPage;