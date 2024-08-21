import Spell from "@/componentes/Spell";
import styles from './spellspage.module.css';
import { ChangeEvent, useState } from "react";

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function SpellsPage({ data }: { data: ISpell[] }){
  const [spells, setSpells] = useState(data);

  function filterSpells(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toLocaleUpperCase();
    const spellsFilter = data.filter((spell) =>
      spell.name.toLocaleUpperCase().includes(value)
    );
    setSpells(spellsFilter);
  }

  return (
    <main className={styles.main}>
      <input className={styles.input} type="text" onChange={filterSpells} placeholder="Filtrar feitiço..."/>
      <div className={styles.container}>
        {spells.map(spell => <Spell key={spell.index} {...spell}/>)}
        {spells.length ? '' : <p className={styles.notfound}>Parece que não há nenhum feitiço por aqui... <SentimentDissatisfiedIcon /></p>}
      </div>
    </main>
  )
}