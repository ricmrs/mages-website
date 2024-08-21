import { getBooks } from '@/service/books';

export { default } from '@/screens/BooksPage';

export async function getStaticProps() {
  const { data } = await getBooks();

  return { props: { data } }
}