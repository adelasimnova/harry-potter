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
            <td className="table-header">Image</td>
            <td className="table-header">Name</td>
            <td className="table-header">Gender</td>
            <td className="table-header">Year of birth</td>
            <td className="table-header">Species</td>
            <td className="table-header">Wizard</td>
            <td className="table-header">Ancestry</td>
            <td className="table-header">Eye color</td>
            <td className="table-header">Hair color</td>
            <td className="table-header">Patronus</td>
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
