import React from "react";
import "./HarryPotter.css";
import { getCharacters } from "../../../services/api.ts";
import LoadingScreen from "../../LoadingScreen/LoadingScreen.tsx";
import { ICharacter } from "../../../types/ICharacter.ts";
import HarryPotterTable from "../harry-potter-table/HarryPotterTable.tsx";

export function HarryPotter() {
  const [characters, setCharacters] = React.useState<ICharacter[] | null>(null);

  const [charactersLoading, setCharactersLoading] =
    React.useState<boolean>(false);

  const [error, setError] = React.useState<string | null>(null);

  const [searchText, setSearchText] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState<number>(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
    setCurrentPage(0);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setCharactersLoading(true);
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
        setCharactersLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setCharactersLoading(false);
      });
  };

  let filteredCharacters;
  if (searchText && characters !== null) {
    filteredCharacters = characters.filter((item) => {
      const nameLowerCased = item.name.toLowerCase();
      const searchLowerCased = searchText.toLowerCase();
      const filterResult = nameLowerCased.includes(searchLowerCased);
      return filterResult;
    });
  } else {
    filteredCharacters = characters;
  }

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div>
        <input
          className="search-input"
          placeholder="Search here!"
          onChange={handleChange}
          value={searchText}
        />
        <div className="loading-wrapper">
          {charactersLoading && <LoadingScreen />}
        </div>
        {error && <p>{error}</p>}
      </div>
      {filteredCharacters && (
        <HarryPotterTable
          characters={filteredCharacters}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
