import styles from "./togglebuttonmultiple.module.css";
import { getEmojiType, getStyleType } from "@/utils/Types";

import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonsMultiple({
  types,
  filterType,
}: {
  types: string[];
  filterType: (types: string[]) => void;
}) {
  // const HOUSES = types.map(house => house.house + " " + house.emoji)
  const [formats, setFormats] = React.useState<string[]>(types);
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
    filterType(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="magic types"
      className={styles.container}
    >
      {types.map((type) => {
        return (
          <ToggleButton
            key={type}
            value={type}
            aria-label={type}
            className={`${styles.button} ${styles[getStyleType(type)!]}`}
          >
            {getEmojiType(type)}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
