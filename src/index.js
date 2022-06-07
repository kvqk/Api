const mainCard = document.getElementById("mainContainer");

async function getData() {
  const response = await fetch(
    "https://anime-facts-rest-api.herokuapp.com/api/v1"
  );

  const res = await response.json();
  res?.data.map((anime) => {
    console.log(anime);
    const div = document.createElement("div");
    div.id = "indiviual-card";

    const image = document.createElement("img");
    image.src = anime.anime_img;

    const nameSpan = document.createElement("span");
    nameSpan.id = "name";
    nameSpan.textContent = anime.anime_name;

    div.append(image);
    div.append(nameSpan);

    mainCard.append(div);
  });
}

getData();
