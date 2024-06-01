export default async function register(name, email, password) {
  const data = await fetch("http://localhost:5000/api/auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ displayName: name, email, password }),
  });

  const response = await data.json();

  return response;
}
