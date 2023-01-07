
import {CuentaCorriente} from './CuentaCorriente.js'
import {Cliente} from './cliente.js'

const cliente1 = new Cliente("José","13232","12345");


const cuentaCorriente1 = new CuentaCorriente("232323","BBVA", cliente1 );

cuentaCorriente1.depositosEnCuenta(5000);


const cliente2 = new Cliente("Jenny", "232323", "654321"); 

const cuentaCorriente2 = new CuentaCorriente("123434343",5000, "Bancolombia",cliente2);


console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);


cuentaCorriente1.depositosEnCuenta(1234);
console.log(cuentaCorriente1);

cuentaCorriente1.retiroEnCuenta(4000);
console.log(cuentaCorriente1.saldo);

const cuentaCorriente3 = new CuentaCorriente()
console.log("Cuenta 3" ,cuentaCorriente3);

let saldo = cuentaCorriente1.saldo; 
console.log(`El saldo es ${saldo}`);

cuentaCorriente1.tranferirParaCuenta(1000, cuentaCorriente3)
console.log(cuentaCorriente1.saldo);
console.log(cuentaCorriente3.saldo);

console.log("Cantidad de cuentas: ", CuentaCorriente.cantidadDeCuentas);