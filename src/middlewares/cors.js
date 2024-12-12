module.exports = (req, res, next) => {
  const allowedDomains = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5500",
    "http://find.utdnews.com",
    "https://find.utdnews.com",
    "http://www.find.utdnews.com",
    "https://www.find.utdnews.com",
  ];
  const { origin } = req.headers;
  const DEFAULT_ALLOWED_METHODS = "GET, HEAD, PUT, PATCH, POST, DELETE";
  if (allowedDomains.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
    res.header(
      "Access-Control-Allow-Headers",
      req.headers["access-control-request-headers"]
    );
    return res.end();
  }

  next();
};
