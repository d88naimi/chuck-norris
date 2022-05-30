const getJokes = async () => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const jokes = await response.json();
  return jokes;
};

export default getJokes;
