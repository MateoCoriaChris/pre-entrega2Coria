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

gustos=['chocolate', 'vainilla','granizado','mascarpone','frutilla', 'dulce de leche', 'frutos del bosque', 'tiramisu'];
variedadesDePasteles=['pastel cheesecake','pastel selva negra','pastel de frutilla'];
variedadesDeHeladosDeAgua=['helado de agua de naranja','helado de agua de limon','helado de agua de frutilla'];


const cucurchoSimple= new producto1('Cucurucho Simple',gustos,300);
const cucurchoDoble=new producto1('Cucurucho Doble',gustos,380);
const heladoDeUnCuarto=new producto1('Helado de 1/4kg',gustos,420);
const heladoDeUnMedio=new producto1('Helado de 1/2kg',gustos,420);
const heladoDeUnKilo=new producto1('Helado de 1kg',gustos,1260);

const productos = [
      helados=[cucurchoSimple, cucurchoDoble,heladoDeUnCuarto,heladoDeMedio,heladoDeUnKilo], 
      pasteles=new producto2(variedadesDePasteles,2500), 
      heladosDeAgua=new producto2(variedadesDeHeladosDeAgua,200)
]





do {producto=prompt('¿Que se les ofrece? 1.helados  2.pasteles  3.helados de agua. ingrese "FIN" para salir.');
        productoNoValido=producto!=='1'||'2'||'3'
        switch(producto){
          case 'helados':
                productoIngresadoA=prompt('¿Que clase de helado va a querer? 1.cucurucho simple   2.cucrucho doble   3.helado de 1/4kg   4.helado de 1/2kg   5.helado de 1kg.');
                switch(productoIngresadoA){
                      case 'cucurucho simple':
                      cucuruchoSimple=alert('el cucurucho simple sale 300$¿Que sabor va a querer en su cucurucho simple?');
                      Gusto();
                      pago(300);
                      break;
                      case 'cucurucho doble':
                            cucuruchoDoble=alert('el cucrucho doble sale 380$¿Que sabor va a querer en su cucurucho doble?')
                            Gusto();
                            pago(380);
                            break;
                      case 'helado de 1/4kg':
                            heladoDeUnCuarto=alert('el helado de 1/4kg sale 420$¿Que sabor va a querer en su Helado de 1/4?')
                            Gusto();
                            pago(420);
                            break;
                      case 'helado de 1/2kg':
                            heladoDeMedio=alert('el helado de 1/2kg sale 780$¿Que sabor va a querer en su Helado de 1/2kg?')
                            Gusto();
                            pago(780);
                            break;
                      case 'helado de 1kg':
                            heladoDeUnKilo=prompt('el helado de 1kg sale 1260$¿Que sabor va a querer en su helado de 1kg?')
                            Gusto();
                            pago(1260);
                            break;
                      default:
                            alert('El helado ingresado no existe. Ingrese otro tipo de helado');
                }
                break;
          case '2':
                productoIngresadoB=prompt('¿Que clase de pastel va a querer? 1.cheesecake 2.selva negra 3.pastel de frutilla.');
                switch(productoIngresadoB){
                      case'1':
                      alert('el pastel cheesecake sale 2500$');
                      pago(2500);
                      break;
                      case'2':
                      alert('el pastel selva negra sale 2550$');
                      pago(2550);
                      break;
                      case'3':
                      alert('el pastel de frutilla sale 2450$');
                      pago(2450);
                      break;
                      default:
                            alert('El pastel ingresado no existe. Ingrese otro tipo de pastel');   
                }
    
                break;
          case '3':
                prompt('¿Que clase de helado de agua va a querer? 1.de naranja 2.de limon 3.de frutilla.');
                productoIngresadoC=prompt('¿Que clase de helado de agua va a querer?');
                switch(productoIngresadoC){
                      case'30':
                      alert('el helado de agua de naranja sale 200$');
                      pago(200);
                      break;
                      case'31':
                      alert('el helado de agua de limon sale 200$');
                      pago(200);
                      break;
                      case'32':
                      alert('el helado de agua de frutilla sale 200$');
                      pago(200);
                      break;
                      default:
                            alert('El helado de agua ingresado no existe. Ingrese otro tipo de helado de agua');
                }
                break;
          default:
                alert('El producto ingresado no existe. Ingrese otro tipode producto o ingrese "FIN" para salir.');   
        }
    }while(producto!= 'FIN');
