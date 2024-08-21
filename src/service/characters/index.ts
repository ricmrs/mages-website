import { magesApi } from "@/config/http";


export function getCharacters(){
  return magesApi.get('/characters');
}
