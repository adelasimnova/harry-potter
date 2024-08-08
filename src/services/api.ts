import axios from "axios";
import { ICharacter } from "../types/ICharacter";

const HP_CHARACTER_API_URL = "https://hp-api.herokuapp.com/api/characters";

export async function getCharacters(): Promise<ICharacter[]> {
  const result = await axios.get(HP_CHARACTER_API_URL);

  // if (!result.data) {
  //   throw new Error("Data not found");
  // }

  return result.data;
}
