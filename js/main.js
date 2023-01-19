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


const carritoDeCompra = [];

class compra {
      constructor(entrada) {
        this.productoComprado = entrada.productoComprado;
        this.fecha = entrada.fecha;}
}

class item{
      constructor(nombreDelProducto, precio){
      this.nombreDelProducto= nombreDelProducto;
      this.precio=parseInt(precio);}}

const helados=[(cucuruchoSimple=new item('Cucurucho Simple',300),
                cucuruchoDoble=new item('Cucurucho Doble',380), 
                heladoDeUnCuarto=new item('Helado de 1/4kg',420),
                heladoDeMedio=new item('Helado de 1/2kg',780),
                heladoDeUnKilo=new item('Helado de 1kg',1260) )]


const productos = [

      helados,

      {pasteles:[(pastelCheesecake=new item('pastel cheesecake',2500),
      pastelSelvaNegra=new item('pastel selva negra',2550),
      pastelDeFrutilla=new item('pastel de frutilla',2450))]},

      {heladosDeAgua:[(heladoDeAguaDeNaranja=new item('helado de agua de naranja',200),
      heladoDeAguaDeLimon=new item('helado de agua de limon',200),
      heladoDeAguaDeFrutilla=new item('helado de agua de frutilla',200))]}
]


const gustos=['chocolate', 'frutilla','granizado','mascarpone','vainilla', 'dulce de leche', 'frutos del bosque', 'tiramisu'];
gustos.splice('mascarpone','vainilla','dulce de leche','frutos del bosque','tiramisu');
console.log(gustos)


elegirGusto=(gustos)=>{
      gustoElegido=prompt('1.chocolate, 2.frutilla, 3.granizado').toLocaleLowerCase
      saborNoValido=helado!==chocolate||frutilla||granizado;
      do{
      if(helado == 1){
             alert('Su helado sera de chocolate');
              break;
        }else if(helado == 2){
             alert('Su helado sera de frutilla');
             break;
        }else if(helado == 3){
              alert('Su helado sera de granizado');
              break;
        }else{alert('El Sabor ingresado no existe. Ingrese otro numero entre 1 y 3');
        }
      }while(helado===saborNoValido);
}


const co=(productoIngresado,productos)=>{
      return productos.find(productos => productos.some().toLocaleLowerCase===productoIngresado);
}





do{compraIngresada=prompt('¿Que se les ofrece? 1.helados  2.pasteles  3.helados de agua. ingrese "FIN" para salir.');
compraNoValida=compraIngresada!=='1'||'2'||'3'
const nuevaCompra= new compra({ productoComprado: compraIngresada, fecha: new Date()});
 switch(compraIngresada){
      case '1':
            compraIngresadaA=prompt('¿Que clase de helado va a querer? 1.cucurucho simple   2.cucrucho doble   3.helado de 1/4kg   4.helado de 1/2kg   5.helado de 1kg.');
            switch(compraIngresadaA){
                  case '1':
                  cucuruchoSimple=alert('el cucurucho simple sale 300$¿Que sabor va a querer en su cucurucho simple?');
                  elegirGusto(gustos);
                  pago(300);
                  break;
                  case '2':
                        cucuruchoDoble=alert('el cucrucho doble sale 380$¿Que sabor va a querer en su cucurucho doble?');
                        elegirGusto(gustos);
                        pago(380);
                        break;
                  case '3':
                        heladoDeUnCuarto=alert('el helado de 1/4kg sale 420$¿Que sabor va a querer en su Helado de 1/4?');
                        elegirGusto(gustos);
                        pago(420);
                        break;
                  case '4':
                        heladoDeMedio=alert('el helado de 1/2kg sale 780$¿Que sabor va a querer en su Helado de 1/2kg?');
                        elegirGusto(gustos);
                        pago(780);
                        break;
                  case '5':
                        heladoDeUnKilo=prompt('el helado de 1kg sale 1260$¿Que sabor va a querer en su helado de 1kg?');
                        elegirGusto(gustos);
                        pago(1260);
                        break;
                  default:
                        alert('El helado ingresado no existe. Ingrese otro tipo de helado');
            }
            break;
      case '2':
            compraIngresadaB=prompt('¿Que clase de pastel va a querer? 1.cheesecake 2.selva negra 3.pastel de frutilla.');
            switch(compraIngresadaB){
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
            compraIngresadaC=prompt('¿Que clase de helado de agua va a querer?');
            switch(compraIngresadaC){
                  case'1':
                  alert('el helado de agua de naranja sale 200$');
                  pago(200);
                  break;
                  case'2':
                  alert('el helado de agua de limon sale 200$');
                  pago(200);
                  break;
                  case'3':
                  alert('el helado de agua de frutilla sale 200$');
                  pago(200);
                  break;
                  default:
                        alert('El helado de agua ingresado no existe. Ingrese otro tipo de helado de agua');
            }
            break;
      default:
            alert('El producto ingresado no existe. Ingrese otro tipo de producto o ingrese "FIN" para salir.');}

}while(compraIngresada!== 'FIN');
