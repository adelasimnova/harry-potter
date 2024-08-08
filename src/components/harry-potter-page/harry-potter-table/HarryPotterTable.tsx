import "./HarryPotterTable.css";
import { ICharacter } from "../../../types/ICharacter.ts";
import Pagination from "../pagination/Pagination.tsx";

const ITEMS_PER_PAGE = 20;

interface IProps {
  characters: ICharacter[];
  currentPage: number;
  setCurrentPage: (pageIndex: number) => void;
}

export default function HarryPotterTable(props: IProps) {
  console.log(props.characters);

  let charactersOnPage: ICharacter[] = [];
  if (props.characters.length > ITEMS_PER_PAGE) {
    charactersOnPage = props.characters.slice(
      props.currentPage * ITEMS_PER_PAGE,
      props.currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    );
  }

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Year of birth</td>
            <td>Species</td>
            <td>Wizard</td>
            <td>Ancestry</td>
            <td>Eye color</td>
            <td>Hair color</td>
            <td>Patronus</td>
          </tr>
        </thead>
        <tbody>
          {charactersOnPage.map((item) => (
            <tr>
              <td>
                <img src={item.image} className="character-image"></img>
              </td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.yearOfBirth}</td>
              <td>{item.species}</td>
              <td>{item.wizard ? "yes" : "no"}</td>
              <td>{item.ancestry}</td>
              <td>{item.eyeColour}</td>
              <td>{item.hairColour}</td>
              <td>{item.patronus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.characters.length > 0 && (
        <Pagination
          itemsCount={props.characters.length}
          setCurrentPage={props.setCurrentPage}
          currentPage={props.currentPage}
        />
      )}
    </div>
  );
}
