async function getJoke() {
  try {
    const res = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
    const result = await res.json();

    console.log(result);

    // Correct path to jokes array
    const jokesArray = result.data.data;
    console.log(jokesArray);
    

    // Pick a random joke from 10 items
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const joke = jokesArray[randomIndex];

    console.log(joke);

    // Display joke
    document.getElementById("setup").innerText = joke.content;
    document.getElementById("punchline").innerText = ""; // no punchline in this API

  } catch (error) {
    console.log(error);
    alert("Failed to fetch joke");
  }
}