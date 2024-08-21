import { magesApi } from "@/config/http";


export function getSpells(){
  return magesApi.get('/spells');
}

export function getSpell(spellIndex: number){
  return magesApi.get('spells?index='+spellIndex);
}