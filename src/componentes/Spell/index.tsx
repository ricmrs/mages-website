
import { Popover } from "@mui/material";
import styles from "./spell.module.css";
import React from "react";
import { getEmojiType, getStyleType } from "@/utils/Types";

export default function Spell(spell: ISpell) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`${styles.container} ${styles[getStyleType(spell.type)!]}`}>
      <div className={styles.infos}>
      <p
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {spell.name + " " + getEmojiType(spell.type)}
      </p>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <p className={`${styles.popover} ${styles[getStyleType(spell?.type)!]}`}>{spell.description}</p>
      </Popover>
      </div>
    </div>
  );
}
