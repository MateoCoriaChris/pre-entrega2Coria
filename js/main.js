bienvenidos=()=>{
    alert('bienvenidos a  la Heladeria Hogar.');
}

pago=(precioDelProducto)=>{
      formaDePago=prompt('¿como desea pagar? 1.efectivo 2.tarjeta de credito 3.tarjeta de debito');
      switch(formaDePago){
            case '1':
                  efectivo=1;
                  alert('el total a pagar es '+precioDelProducto*efectivo+'$.');
                  break;
            case '2':
                  tarjetaDeCredito=1.30;
                  alert('los pagos con tarjeta de credito tienen un 30% de recargo.');
                  alert('el total a pagar es '+precioDelProducto*tarjetaDeCredito+'$.');
                  break;
            case '3':
                  tarjetaDeDebito=1.10;
                  alert('los pagos con tarjeta de debito tienen un 10% de recargo.');
                  alert('el total a pagar es '+precioDelProducto*tarjetaDeDebito+'$.');
                  break;
            default:
                  alert('forma de pago no valida, ingrese otro metodo.');     
      }
}



class producto1{
      constructor(nombreDelProducto, sabor, precio){
      this.nombreDelProducto= nombreDelProducto;
      this.sabor=sabor;
      this.precio=parseInt(precio);

}
      seleccionDeproducto(seleccion){
            alert(seleccion+this.nombreDelProducto+'ha sido seleccionado.');
      }
}
class producto2{
      constructor(nombreDelProducto, precio){
      this.nombreDelProducto= nombreDelProducto;
      this.precio=parseInt(precio);

}
      seleccionDeproducto(seleccion){
            alert(seleccion+this.nombreDelProducto+'ha sido seleccionado.');
      }
}

const gustos=['chocolate', 'vainilla','granizado','mascarpone','frutilla', 'dulce de leche', 'frutos del bosque', 'tiramisu'];
elegirGusto=(gustos)=>{
      prompt('1.chocolate, 2.vainilla, 3.granizado, 4.mascarpone, 5.frutilla, 6.dulce de leche, 7.frutos del bosque, 8.tiramisu')
      
}

const productos = [
       {helados:[
              {producto:'Cucurucho Simple', sabores:gustos,precio:300},
              {producto:'Cucurucho Doble', sabores:gustos,precio:380},
              {producto:'Helado de 1/4kg', sabores:gustos,precio:420},
              {producto:'Helado de 1/2kg', sabores:gustos,precio:420},
              {producto:'Helado de 1kg', sabores:gustos, precio:1260} 
            ]},
               
       {pasteles:[
            {producto:'pastel cheesecake',precio:2500},
            {producto:'pastel selva negra',precio:2550},
            {producto:'pastel de frutilla',precio:2450}
       ]},
       {heladosDeAgua:[
            {producto:'helado de agua de naranja',precio:200},
            {producto:'helado de agua de limon',precio:200},
            {producto:'helado de agua de frutilla',precio:200}
       ]}
]
