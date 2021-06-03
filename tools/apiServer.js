const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");

const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  setTimeout(next, 2000);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/courses/", (req, res, next) => {
  error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title);
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`Json server is running on port ${port}`);
});

const createSlug = (value) => {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
};

const validateCourse = (value) => {
  if (!value.title) return "Title is required";
  if (!value.authorId) return "Author is required";
  if (!value.category) return "Category is required";
  return "";
};
