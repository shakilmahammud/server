const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db_todos.json');
const PORT = process.env.PORT || 8000;
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});


