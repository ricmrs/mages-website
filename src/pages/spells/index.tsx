import { getSpells } from '@/service/spells';

export { default } from '@/screens/SpellsPage';

export async function getStaticProps() {
  const { data } = await getSpells();

  return { props: { data } }
}