bienvenidos=()=>{
    alert('bienvenidos a  la Heladeria Hogar.');
}
const carritoDeCompra= []; 

pago=(precioDelProducto)=>{
      formaDePago=prompt('¿como desea pagar? 1.efectivo 2.tarjeta de credito 3.tarjeta de debito');
      switch(formaDePago){
            case '1':
                  efectivo=1;
                  alert('el total a pagar es '+precioDelProducto*efectivo+'$.');
                  pagoConEfectivo=efectivo*precioDelProducto
                  carritoDeCompra.push(pagoConEfectivo);
                  break;
            case '2':
                  tarjetaDeCredito=1.30;
                  alert('los pagos con tarjeta de credito tienen un 30% de recargo.');
                  alert('el total a pagar es '+precioDelProducto*tarjetaDeCredito+'$.');
                  pagoConTarjetaDeCredito=tarjetaDeCredito*precioDelProducto
                  carritoDeCompra.push(pagoConTarjetaDeCredito);
                  break;
            case '3':
                  tarjetaDeDebito=1.10;
                  alert('los pagos con tarjeta de debito tienen un 10% de recargo.');
                  alert('el total a pagar es '+precioDelProducto*tarjetaDeDebito+'$.');
                  pagoConTarjetaDeDebito=tarjetaDeDebito*precioDelProducto
                  carritoDeCompra.push(pagoConTarjetaDeDebito);
                  break;
            default:
                  alert('forma de pago no valida, ingrese otro metodo.');     
      }
}
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



elegirGusto=(gustos)=>{
      gustoElegido=prompt('1.chocolate, 2.frutilla, 3.granizado')
      saborNoValido=gustoElegido!=='chocolate'||'frutilla'||'granizado';
      do{
      if(gustoElegido === 'chocolate'){
             alert('Su helado sera de chocolate');
              break;
        }else if(gustoElegido == 'frutilla'){
             alert('Su helado sera de frutilla');
             break;
        }else if(gustoElegido == 'granizado'){
              alert('Su helado sera de granizado');
              break;
        }else(alert('El Sabor ingresado no existe. Ingrese otro sabor.'));
        
      }while(gustoElegido!==saborNoValido);
}


do{compraIngresada=prompt('¿Que se les ofrece? 1.helados  2.pasteles  3.helados de agua. ingrese "FIN" para salir.');
compraNoValida=compraIngresada!=='helados'||'pasteles'||'helados de agua'
switch(compraIngresada){
      case 'helados':
            compraIngresadaA=prompt('¿Que clase de helado va a querer? 1.cucurucho simple   2.cucrucho doble   3.helado de 1/4kg   4.helado de 1/2kg   5.helado de 1kg.');
            switch(compraIngresadaA){
                  case 'cucurucho simple':
                  cucuruchoSimple=alert('el cucurucho simple sale 300$¿Que sabor va a querer en su cucurucho simple?');
                  elegirGusto(gustos);
                  pago(300);
                  break;
                  case 'cucrucho doble':
                        cucuruchoDoble=alert('el cucrucho doble sale 380$¿Que sabor va a querer en su cucurucho doble?');
                        elegirGusto(gustos);
                        pago(380);
                        break;
                  case 'helado de 1/4kg':
                        heladoDeUnCuarto=alert('el helado de 1/4kg sale 420$¿Que sabor va a querer en su Helado de 1/4?');
                        elegirGusto(gustos);
                        pago(420);
                        break;
                  case 'helado de 1/2kg':
                        heladoDeMedio=alert('el helado de 1/2kg sale 780$¿Que sabor va a querer en su Helado de 1/2kg?');
                        elegirGusto(gustos);
                        pago(780);
                        break;
                  case 'helado de 1kg':
                        heladoDeUnKilo=alert('el helado de 1kg sale 1260$¿Que sabor va a querer en su helado de 1kg?');
                        elegirGusto(gustos);
                        pago(1260);
                        break;
                  default:
                        alert('El helado ingresado no existe. Ingrese otro tipo de helado');
            }
            break;
      case 'pasteles':
            compraIngresadaB=prompt('¿Que clase de pastel va a querer? 1.cheesecake 2.selva negra 3.de frutilla.');
            switch(compraIngresadaB){
                  case'cheesecake':
                  alert('el pastel cheesecake sale 2500$');
                  pago(2500);
                  break;
                  case'selva negra':
                  alert('el pastel selva negra sale 2550$');
                  pago(2550);
                  break;
                  case'de frutilla':
                  alert('el pastel de frutilla sale 2450$');
                  pago(2450);
                  break;
                  default:
                        alert('El pastel ingresado no existe. Ingrese otro tipo de pastel');   
            }

            break;
      case 'helados de agua':
            compraIngresadaC=prompt('¿Que clase de helado de agua va a querer? 1.de naranja 2.de limon 3.de frutilla.');
            switch(compraIngresadaC){
                  case'de naranja':
                  alert('el helado de agua de naranja sale 200$');
                  pago(200);
                  break;
                  case'de limon':
                  alert('el helado de agua de limon sale 200$');
                  pago(200);
                  break;
                  case'de frutilla':
                  alert('el helado de agua de frutilla sale 200$');
                  pago(200);
                  break;
                  default:
                        alert('El helado de agua ingresado no existe. Ingrese otro tipo de helado de agua');
            }
            break;
      default:
            alert('El producto ingresado no existe. Ingrese otro tipo de producto o ingrese "FIN" para salir.');}
}while(compraIngresada===compraNoValida);

