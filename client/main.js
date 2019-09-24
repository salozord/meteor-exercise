import './main.html';
import Eventos from '../collections';

Template.eventos.helpers({
  getEventos: () => {
    return Eventos.find();  
  },
  empty: () => {
    return (Eventos.find().count() === 0)? "No hay eventos que mostrar" : "";
  }
});

Template.formulario.events({
  'submit form': (e, i) => {
    e.preventDefault();
    const t = e.target;

    let nuevo = {
      nombre: t.nombre.value,
      descripcion: t.descripcion.value,
      responsable: t.responsable.value,
      inicio: t.inicio.value.toString(),
      fin: t.fin.value.toString(),
      ubicacion: t.ubicacion.value
    };
    t.nombre.value = "";
    t.descripcion.value = "";
    t.responsable.value = "";
    t.inicio.value = "";
    t.fin.value = "";
    t.ubicacion.value = "";

    Eventos.insert(nuevo);
  }
});
