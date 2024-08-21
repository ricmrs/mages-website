import Image from "next/image";
import styles from "./book.module.css";

export default function Book(data: any) {
  const book: IBook = { ...data, releaseDate: new Date(data.releaseDate) };

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <p className={styles.title}>Título: {book.title}</p>
        <p>Descrição: {book.description}</p>
        <p>Data de publicação: {book.releaseDate.toLocaleDateString()}</p>
      </div>
      <Image alt={book.title} src={book.image} width={300} height={300} />
    </div>
  );
}
