const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

server.use(cors());
server.use(bodyParser.json());
server.use(middlewares);
server.use(jsonServer.rewriter(routes));

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login exitoso', user });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

server.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = router.db.get('teams').find({ id: parseInt(id) }).value();

  if (team) {
    res.json(team);
  } else {
    res.status(404).json({ error: 'Equipo no encontrado' });
  }
});

server.get('/teams/:id/events', (req, res) =>  {
  const { id } = req.params;
  const events = router.db.get('events').filter({ teamId: parseInt(id) }).value();

  if (events) {
    res.json(events);
  } else {
    res.status(404).json({ error: 'Eventos no encontrados' });
  }
});

server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
