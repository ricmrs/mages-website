import Character from "@/componentes/Character";
import styles from "./characterspage.module.css";
import { ChangeEvent, useEffect, useState } from "react";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import ToggleButtonsMultiple from "@/componentes/ToggleButtonsMultiple";

export default function CharacterPage({
  characters,
  types
}: {
  characters: ICharacter[],
  types: string[] 
}) {
  const [chars, setChars] = useState(characters);
  const [inputValue, setInputValue] = useState("");
  const [typesPressed, setTypesPressed] = useState<string[]>(types);

  useEffect(() => {
    function filter(inputValue: string, types: string[]) {
      const characterFilteredByNameAndType = characters.filter(
        (char) =>
          types.includes(char.type) &&
          char.name.toLocaleUpperCase().includes(inputValue)
      );
      setChars(characterFilteredByNameAndType);
    }
  
    filter(inputValue, typesPressed);
  }, [inputValue, typesPressed, characters]);

  function filterChar(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toLocaleUpperCase();
    setInputValue(value);
  }

  function filterType(types: string[]) {
    setTypesPressed(types);
  }

  return (
    <main className={styles.main}>
      <input
        className={styles.input}
        type="text"
        onChange={filterChar}
        placeholder="Filtrar por nome de mago..."
      />
      <ToggleButtonsMultiple types={types} filterType={filterType} />
      <div className={styles.container}>
        {chars?.map((char) => (
          <Character key={char.index} {...char} />
        ))}
        {chars?.length ? (
          ""
        ) : (
          <p className={styles.notfound}>
            Parece que não há nenhum mago por aqui...{" "}
            <SentimentDissatisfiedIcon />
          </p>
        )}
      </div>
    </main>
  );
}
