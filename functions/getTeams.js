//recuperer tous les presataires
export async function getTeams() {
  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getTeams.php`);
  const teams = await response.json();
  return teams;
}
