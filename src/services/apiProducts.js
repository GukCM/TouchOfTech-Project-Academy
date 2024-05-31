export async function getProducts() {
  const response = await fetch("http://localhost:5000/api/store/collections/");
  const { data } = await response.json();
  return data;
}
