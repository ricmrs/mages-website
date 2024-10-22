import Image from "next/image";
import styles from "./character.module.css";

import { getEmojiType, getStyleType } from "@/utils/Types";

export default function Character(char: ICharacter) {

  return (
    <div className={`${styles.container} ${styles[getStyleType(char?.type)!]}`}>
      <div className={styles.infos}>
        <p>Nome: {char.name}</p>
        <p>Tipo: {char.type + " " + getEmojiType(char?.type)}</p>
        <p>Descrição: {char.description}</p>
      </div>
      <Image alt={char.type} src={char.image} width={200} height={200} priority={char.index == 0 ? true : false }/>
    </div>
  );
}
