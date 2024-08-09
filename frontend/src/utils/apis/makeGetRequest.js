export async function makeGetRequest(url) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      credentials: "include",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
