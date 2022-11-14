export default function sort(arrayGamers) {
  const arrSort = arrayGamers;

  return arrSort.sort((a, b) => b.health - a.health);
}
