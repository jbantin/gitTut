import express from "express";

const app = express();

const API_KEY = process.env.API_KEY;

console.log(URL);

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=53.552343789837124&lon=10.017986297607424&appid=${API_KEY}&units=metric`
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("error", error.message);
  }
};
fetchWeather();
app.use("*", (req, res) => {
  res.send("oioioi");
});

app.listen(4000, () => {
  console.log("app listens at port:4000");
});
