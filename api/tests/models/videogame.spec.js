const { Videogames, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogames.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogames.create({descripcion:"Bonito juego", plataformas:"PC",fechadelanzamiento:"2000/01/29", rating:4})

          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if descripcion is null', (done) => {
        Videogames.create({name:"Sonic", plataformas:"PC",fechadelanzamiento:"2000/01/29", rating:4})
          
          .then(() => done(new Error('It requires a valid descripcion')))
          .catch(() => done());
      });
      it('should throw an error if plataformas is null', (done) => {
        Videogames.create({name:"Sonic", descripcion:"Bonito juego",fechadelanzamiento:"2000/01/29", rating:4})
          
          .then(() => done(new Error('It requires a valid plataformas')))
          .catch(() => done());
      });
      it('should work when all fields are complete', () => {
        Videogames.create({ name: 'Super Mario Bros',descripcion:"Bonito juego", plataformas:"PC",fechadelanzamiento:"2000/01/29", rating:4})

        .then(() => done())
        .catch(() => done(new Error('should work when all fields are complete')));
      });
    });
  });
});
