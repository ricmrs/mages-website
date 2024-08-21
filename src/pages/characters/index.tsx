import { getCharacters } from "@/service/characters";

export { default } from "@/screens/CharactersPage";

export async function getStaticProps() {
  const { data: characters } = await getCharacters();
  const types = Array.from(new Set(characters.map((c: ICharacter) => c.type)));

  return { props: { characters, types } };
}
