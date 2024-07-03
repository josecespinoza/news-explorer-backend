const axios = require("axios");

const baseUrl = process.env.NEWS_API_URL || "https://newsapi.org/v2/everything";
const newsSearchTimeDays = process.env.NEWS_API_SEARCHTIME_DAYS || 30;
const apikey = process.env.NEWS_API_KEY || "336396cba04148f3a4f41d18bea81ac4";

const getFromDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - newsSearchTimeDays);
  const fromDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return fromDate;
};

module.exports.getNews = async (req, res, next) => {
  const { searchTerm, pageSize, page } = req.query;
  try {
    const response = await axios.get(
      `${baseUrl}?q=${searchTerm}&from=${getFromDate()}&pageSize=${pageSize}&page=${page}`,
      {
        headers: {
          authorization: apikey,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
