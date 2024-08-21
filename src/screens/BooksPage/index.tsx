import Book from "@/componentes/Book";
import styles from './bookspage.module.css';

export default function BooksPage({ data: books }: { data: IBook[] }){
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {books.map(book => <Book key={book.index} {...book}/>)}
      </div>
    </main>
  )
}