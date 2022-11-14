export default function stripLife(gamer) {
  if (gamer.health > 50) {
    return 'healthy';
  }
  if (gamer.health > 15) {
    return 'wounded';
  }
  if (gamer.health >= 0) {
    return 'critical';
  }
  return 'dead';
}
