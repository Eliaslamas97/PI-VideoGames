const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogames, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',description:"Bonito juego", platforms:"PC",releaseDate:"2000/01/29", rating:4
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogames.sync({ force: false })
    .then(() => Videogames.create(videogame)));
});
describe('GET /videogame/:id', () => {
  it('should get 200', () =>
    agent.get('/videogame/2').expect(200)
  );
});

describe('GET /', function(){
  it('Deberia tener el estado 200', () =>{
    agent.get('/').expect(200);
  });
});

describe('GET /genres', () => {
  it('Deberia obtener el estado 200', () =>
    agent.get('/genres').expect(200)
  );
});

