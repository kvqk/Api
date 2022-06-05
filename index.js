async function getData() {
  const response = await fetch(
    "https://anime-facts-rest-api.herokuapp.com/api/v1"
  );

  const res = await response.json();
  res?.data.map((anime) => {
    console.log(anime);
  });
}

getData();
