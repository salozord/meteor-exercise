import { Meteor } from 'meteor/meteor';
import Eventos from "../collections";

Meteor.startup(() => {
  if (Eventos.find().count() === 0) {
    console.log("No hay eventos para mostrar :(");
    let dummyEventos = [
      { nombre: "Soccer Uniandes", descripcion: "Partido de fútbol genial en uniandes; los mejores premios.", responsable: "Juanito pérez", inicio: "2019-09-23", fin: "2019-09-25", ubicacion: "La Caneca" },
      { nombre: "¡Baila Salsa!", descripcion: "Baila con los mejores profesores de la universidad y aprende de ellos.", responsable: "Ramón Valdéz", inicio: "2019-09-21", fin: "2019-09-26", ubicacion: "Edificio Z" }
    ];

    dummyEventos.forEach(e => {
      Eventos.insert(e);
    })
  }
});
