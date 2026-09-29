// ==========================================================================
// PROYECTOS DE CAMPO CERCANO
// ==========================================================================
// Este es el ÚNICO archivo que necesitas tocar para añadir, quitar o editar
// proyectos de la web. No hace falta tocar el HTML ni el CSS.
//
// CÓMO AÑADIR UN PROYECTO NUEVO:
//   1) Copia la imagen del póster/proyecto dentro de la carpeta correspondiente:
//        assets/img/proyectos/supervision/
//        assets/img/proyectos/dialogos/
//        assets/img/proyectos/efectos/
//   2) Añade una línea nueva como esta al array de esa categoría:
//        { titulo: "Nombre de la pelicula o serie", imagen: "assets/img/proyectos/efectos/nombre-archivo.jpg" },
//   3) Guarda el archivo. La web se actualiza sola, no hay que programar nada mas.
//
// CÓMO QUITAR UN PROYECTO: borra su línea completa (desde { hasta la , final).
// CÓMO REORDENAR: cambia el orden de las líneas dentro del array.
//
// NOTA: algunos pósters no tenían título accesible en el código de tu web de
// Wix (quedaron como "titulo: """), así que se muestran sin el pequeño
// rótulo al pasar el ratón -- el póster en sí sigue siendo el real. Puedes
// escribir el título si quieres que aparezca.
// ==========================================================================

const PROYECTOS = {
  supervision: [
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-01.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-02.jpg" },
    { titulo: "Poquita fe", imagen: "assets/img/proyectos/supervision/poquita-fe.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-04.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-05.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-06.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-07.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-08.jpg" },
    { titulo: "Élite 6", imagen: "assets/img/proyectos/supervision/elite-6.jpg" },
    { titulo: "La mala familia", imagen: "assets/img/proyectos/supervision/la-mala-familia.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-11.jpg" },
    { titulo: "La memoria del cine", imagen: "assets/img/proyectos/supervision/la-memoria-del-cine.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-13.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-14.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-15.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-16.jpg" },
    { titulo: "Camera Café", imagen: "assets/img/proyectos/supervision/camera-cafe.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-18.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-19.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-20.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-21.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-22.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-23.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-24.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-25.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-26.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-27.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-28.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-29.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-30.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-31.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-32.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-33.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-34.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/supervision/sup-35.jpg" },
  ],
  dialogos: [
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-01.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-02.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-03.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-04.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-05.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-06.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-07.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-08.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-09.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-10.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-11.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-12.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-13.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-14.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-15.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-16.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-17.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-18.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-19.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-20.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-21.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-22.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-23.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-24.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-25.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-26.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-27.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-28.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-29.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-30.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-31.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-32.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-33.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-34.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-35.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-36.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-37.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/dialogos/dia-38.jpg" },
    { titulo: "20.000 especies de abejas", imagen: "assets/img/proyectos/dialogos/20-000-especies-de-abejas.jpg" },
    { titulo: "Pollos sin cabeza", imagen: "assets/img/proyectos/dialogos/pollos-sin-cabeza.jpg" },
    { titulo: "13 exorcismos", imagen: "assets/img/proyectos/dialogos/13-exorcismos.jpg" },
    { titulo: "Infiesto", imagen: "assets/img/proyectos/dialogos/infiesto.jpg" },
    { titulo: "The strays", imagen: "assets/img/proyectos/dialogos/the-strays.jpg" },
    { titulo: "La ruta", imagen: "assets/img/proyectos/dialogos/la-ruta.jpg" },
    { titulo: "Mantícora", imagen: "assets/img/proyectos/dialogos/manticora.jpg" },
    { titulo: "Apagón", imagen: "assets/img/proyectos/dialogos/apagon.jpg" },
    { titulo: "Cinco lobitos", imagen: "assets/img/proyectos/dialogos/cinco-lobitos.jpg" },
    { titulo: "Cerdita", imagen: "assets/img/proyectos/dialogos/cerdita.jpg" },
    { titulo: "This England", imagen: "assets/img/proyectos/dialogos/this-england.jpg" },
    { titulo: "Choose or die", imagen: "assets/img/proyectos/dialogos/choose-or-die.jpg" },
  ],
  efectos: [
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-01.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-02.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-03.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-04.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-05.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-06.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-07.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-08.jpg" },
    { titulo: "Cerrar los ojos", imagen: "assets/img/proyectos/efectos/cerrar-los-ojos.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-10.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-11.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-12.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-13.jpg" },
    { titulo: "Matria", imagen: "assets/img/proyectos/efectos/matria.jpg" },
    { titulo: "La ruta.jpg", imagen: "assets/img/proyectos/efectos/la-ruta.jpg" },
    { titulo: "Bienvenidos a Edén.jpg", imagen: "assets/img/proyectos/efectos/bienvenidos-a-eden.jpg" },
    { titulo: "O corpo aberto", imagen: "assets/img/proyectos/efectos/o-corpo-aberto.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-18.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-19.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-20.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-21.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-22.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-23.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-24.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-25.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-26.jpg" },
    { titulo: "", imagen: "assets/img/proyectos/efectos/efe-27.jpg" },
  ],
};
