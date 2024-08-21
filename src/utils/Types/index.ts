export function getStyleType(type: string){
  const types = {
    fogo: "Fogo",
    terra: "Terra",
    agua: "Água",
    ar: "Ar"
  }

  return Object.entries(types).find(([key, val]) => val === type)?.[0];
}

export function getEmojiType(type: string){
  const emojis = [
    ["Fogo", "🔥"],
    ["Terra", "🌱"],
    ["Água", "🌊"],
    ["Ar", "🌪️"]
  ];
   const typeFound = emojis.find(e => e[0] === type);
   return typeFound ? typeFound[1] : 'Emoji Not Found'
}