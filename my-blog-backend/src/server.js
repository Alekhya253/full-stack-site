import express from 'express';
//this is a temporary in memory fake database later replaced with mongoDB
let articlesInfo = [
  {
    name: 'learn-node',
    upvotes: 0,
  },
  {
    name: 'learn-react',
    upvotes: 0,
  },
  {
    name: 'learn-mongodb',
    upvotes: 0,
  },
];
const app = express();
app.use(express.json());
// app.post("/hello", (req, res) => {
//   console.log(req.body);
//   res.send(`Hello!!! ${req.body.name}`);
// });
// app.get("/hello/:name", (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello ${name}!!`);
// });
app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article has ${article.upvotes} upvotes !!`);
  } else {
    res.send(`article ${name} doesnot exist`);
  }
});
app.listen(8000, () => {
  console.log('server is listening on port 8000');
});
