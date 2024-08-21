import { magesApi } from "@/config/http";


export function getBooks(){
  return magesApi.get('/books');
}

export function getBook(bookIndex: number){
  return magesApi.get('books?index='+bookIndex);
}