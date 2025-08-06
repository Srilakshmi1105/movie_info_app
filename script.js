async function getMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  const apiKey = "68e7371e";
  // Replace with your real key
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

  if (!movieName) {
    document.getElementById("movieDetails").innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      document.getElementById("movieDetails").innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="Movie Poster" />
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
      `;
    } else {
      document.getElementById("movieDetails").innerHTML = `<p>Movie not found. Try another title.</p>`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("movieDetails").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
  }
}
