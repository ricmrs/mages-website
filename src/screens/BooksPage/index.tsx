import Book from "@/componentes/Book";
import styles from "./bookspage.module.css";
import Head from "next/head";

export default function BooksPage({ data: books }: { data: IBook[] }) {
  return (
    <>
      <Head>
        <title>Livros</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {books.map((book) => (
            <Book key={book.index} {...book} />
          ))}
        </div>
      </main>
    </>
  );
}
