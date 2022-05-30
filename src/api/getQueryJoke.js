const getQueryJoke = async (query) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );
  const jokes = await response.json();
  return jokes;
};

export default getQueryJoke;
