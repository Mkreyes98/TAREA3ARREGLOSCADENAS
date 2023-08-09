class Arreglos{
    arreglos(){

        console.log("Operaciones Arreglos")
        let c=4
        let numeros=[]
        numeros[0]=10
        numeros[1]=20
        numeros.push(30)  //posicion 2
        numeros[3]=40
        numeros[c]=50
        c=c+1
        numeros[c]=60
        c=c+1           //0..0.1  0.75......1
        let x= parseInt(Math.random()*10)       //0.1, 0.2 , 1
        numeros[c]=x
        numeros[0]=15
        let num = numero[0]
        let num2 = numeros[0]
        console.table({numeros, num})
        console.log("longitud")
        //console.log(numeros)
        // console
    }
    Mayor(){
        //'23;40;4;100' 
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") //["23","40","4","100"]
     let may=parseInt(numeros[0]) // 23
     for(let i=1;i < numeros.length;i++){
        if (may < parseInt(numeros[i])){
          may = parseInt(numeros[i])//100
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`

    }
    Menor(){
        //'23;40;4;100' 
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") //["23","40","4","100"]
     let menor=parseInt(numeros[0]) // 23
     for(let i=1;i < numeros.length;i++){
        if (menor > parseInt(numeros[i])){
          menor = parseInt(numeros[i])//100
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El menor del arreglo [${numeros}] es= ${menor}`

    }
    Promedio(){
        let datos=document.getElementById("datos").value
        let numeros = datos.split(";").map(Number)  //convertimos cada elemento ingresado a numeros
        let promedio = parseInt(numeros[0])
        let suma= 0
        for (let i=0; i < numeros.length; i++){
            suma = suma + numeros[i]
        }
        promedio = suma / numeros.length
        let resp = document.getElementById("resp")
        resp.textContent= `El promedio del arreglo [${numeros}] es= ${promedio}` 
      
    }
    Nombrealrevez(){
        let datos=document.getElementById("datos").value
        let nombres = datos.split (";")
        let nombresAlReves = nombres.map((nombre) => {
            return nombre.split("").reverse().join("")
          })
          // Paso 2.4: Mostrar los nombres al revés en la página
          let resp = document.getElementById("resp")
          resp.textContent = `Los nombres al revés: [${nombres}]  son = ${nombresAlReves.join(", ")} `
    }
    Buscar(){
        let datosA = document.getElementById("datosA").value;
        let datoB = document.getElementById("datosB").value;
        let arreglo = datosA.split(";").map(Number);
        let elementoB = Number(datoB);
        let posicion = -1;

        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === elementoB) {
            posicion = i;
            break;
            }
        }

        let resp = document.getElementById("resp");
        if (posicion !== -1) {
            resp.textContent = `En el arreglo: [${datosA}], el elemento buscado [${elementoB}] se encuentra en la posición [${posicion}]`;
        } else {
            resp.textContent = `En el arreglo: [${datosA}], el elemento buscado [${elementoB}] no se encuentra.`;
        }

    }
    Adivinaelnumero(){
      let numeroAdivinar = parseInt(document.getElementById("numeroAdivinar").value)
      let arreglo = []
      let encontrado = false
      let posicion = -1
  
      for (let i = 1; i <= 100; i++) { 
          arreglo.push(i);
      }
  
      for (let i = 0; i < arreglo.length; i++) {
          if (arreglo[i] === numeroAdivinar) {
              encontrado = true;
              posicion = i;
              break;
          }
      }
  
      let arreglopuesto = "arreglo [ " + arreglo.join(", ") + "]";
        let resp = document.getElementById("resp");
      if (encontrado) {
          resp.innerHTML = `${arreglopuesto}<br> Adivinaste el número ${numeroAdivinar}. Se encuentra en la posición ${posicion}.`;
      } else {
          resp.innerHTML = `Error: No adivinaste el número ${numeroAdivinar}. No está en el arreglo.<br> ${arreglopuesto}`;
      }
   }
    Insertar(){
        let arregloStr = document.getElementById("arreglo").value;
        let datoInsertar = document.getElementById("datoInsertar").value;
        let posicionIndicada = parseInt(document.getElementById("posicionIndicada").value)
    
        // Convertir el arreglo de cadena a un arreglo numérico
        let arreglo = arregloStr.split(";").map(Number);
    
        // Insertar el dato en la posición indicada usando splice()
        arreglo.splice(posicionIndicada, 0, Number(datoInsertar));
    
        let resp = document.getElementById("resp");
        resp.textContent = `El nuevo arreglo es: [${arreglo}]`
    }
    Eliminar(){
        let arregloStr = document.getElementById("arreglo").value;
        let datoEliminar = document.getElementById("datoEliminar").value;
    
        // Convertir el arreglo de cadena a un arreglo numérico
        let arreglo = arregloStr.split(";").map(Number);
    
        // Encontrar la posición del dato a eliminar en el arreglo
        let posicion = arreglo.indexOf(Number(datoEliminar));
    
        if (posicion !== -1) {
          // Eliminar el dato en la posición encontrada usando splice()
          arreglo.splice(posicion, 1);
          let resp = document.getElementById("resp");
          resp.textContent = `El nuevo arreglo es: [${arreglo.join("; ")}]`;
        } else {
          let resp = document.getElementById("resp");
          resp.textContent = `El dato a eliminar no se encuentra en el arreglo.`;
        } 
    }
    Base10(){
    let numBase10 = parseInt(document.getElementById('numBase10').value);
    let numBase2 = "";

    let numerosBase10 = [];

    while (numBase10 > 0) {
        let residuo = numBase10 % 2;
        numBase2 = residuo + numBase2;
        numBase10 = Math.floor(numBase10 / 2);
    }

    numerosBase10.push({ base10: numBase10, base2: numBase2 });

    const respElement = document.getElementById('resp');
    respElement.innerHTML = `El número [${document.getElementById('numBase10').value}] de base 10 es igual a [${numBase2}] en base 2`    
    }
    base10_a(){
      let digito,numeros = [], base2 = "",aux
      let num = parseInt(document.getElementById("datos").value)
      aux=num
      while (num > 0) {
        digito = num % 2
        num = Math.floor(num / 2)
        numeros.push(digito)
      }
      for (let ind = numeros.length - 1; ind >= 0; ind--) {
        base2 = base2 + numeros[ind]
      }
      console.table({aux,base2})
      let resp = document.getElementById("resp")
      resp.textContent = `Base10[${aux}] es= ${base2} Base2`
    }
    Base2(){
        let numBase2Input = document.getElementById('numBase2').value;
        let numBase2Array = numBase2Input.split('').map(digit => parseInt(digit));

        let numBase10 = 0;
        const pasosIntermedios = [];

        for (let i = 0; i < numBase2Array.length; i++) {
            let digit = numBase2Array[i];
            if (digit === 1) {
                numBase10 += 2 ** i;
                pasosIntermedios.push(`2^${i} = ${2 ** i}`);
            }
        }

        let respElement = document.getElementById('resp');
        respElement.innerHTML = `El número en base 10 es: ${numBase10}<br>`;
        respElement.innerHTML = `El numero [${numBase2Input}] de base 2 es igual a [${numBase10}] en base 10`
    }
    Sueldo(){ 
        const nombres = document.getElementById('nombres').value.split(';');
        const valorHoras = document.getElementById('valorhoras').value.split(';').map(parseFloat);
        const numeroHoras = document.getElementById('numerohoras').value.split(';').map(parseFloat);
        
        const empleados = [];
        for (let i = 0; i < nombres.length; i++) {
            const nombre = nombres[i];
            const vh = valorHoras[i];
            const nh = numeroHoras[i];
            const sueldo = vh * nh;
            empleados.push({ nombre: nombre, sueldo: sueldo });
        }

        let respElement = document.getElementById('resp');
        respElement.innerHTML = '';
        respElement.innerHTML = `El sueldo de los empleados es: <br>`

        for (let i = 0; i < empleados.length; i++) {
            respElement.innerHTML += `${empleados[i].nombre}: $${empleados[i].sueldo}<br>`
        }
    }
    
    acuDivisores(num){
        let acu=0
        for(let c=1;c<num;c++){
           if (num%c==0){
               acu=acu+c
           }
        }
        return acu //1+3=4
     }
    Suma_div(){
        //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
    }
    let resp = document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
    }
    Perfectos(){
         //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        if (acu==num){
           resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
        }
     }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`

    }
    Primos(){

        let datos = document.getElementById("datos").value;
        let numeros = datos.split(";").map(Number);
        let primos = [];
        
        for (let i = 0; i < numeros.length; i++) {
          let numero = numeros[i];
          let esPrimo = true;
          
          if (numero <= 1) {
            esPrimo = false;
          } else {
            for (let j = 2; j * j <= numero; j++) {
              if (numero % j === 0) {
                esPrimo = false;
                break;
              }
            }
          }
    
          if (esPrimo) {
            primos.push(numero);
          }
        }
    
        let resp = document.getElementById("resp");
        if (primos.length > 0) {
          resp.textContent = `En el arreglo [${numeros}], los números primos son: [${primos.join(", ")}].`;
        } else {
          resp.textContent = `En el arreglo [${numeros}], no hay números primos.`;
        }
    }

    Repeticionumero(){
      let arreglo = document.getElementById("arreglo").value.split(";")
      let numero = {}; //almacenar las repeticiones de cada número
    
      for (let num of arreglo) {
          if (numero[num]) {
              numero[num]++
          } else {
              numero[num] = 1
          }
      }
    
      let repetidos = [];
      for (let num in numero) {
          if (numero[num] > 1) {
              repetidos.push(`${num} (se repite ${numero[num]} veces)`)
          }
      }
    
      let resp = document.getElementById("resp");
      if (repetidos.length === 0) {
          resp.textContent = `No se encontraron números repetidos en el arreglo.`
      } else {
          resp.textContent = `Números repetidos en el arreglo: ${repetidos.join("; ")}`
      }
    }
    Numerosaletras(){
        let numero = parseFloat(document.getElementById('numero').value);
        let unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        let decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        let centenas = ['cien', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

        let resultado = '';
        
        if (numero === 0) {
            resultado = 'cero';
        } else if (numero <= 9) {
            resultado = unidades[numero];
        } else if (numero < 100) {
            let decena = Math.floor(numero / 10);
            let unidad = numero % 10;
            resultado = decenas[decena];
            if (unidad !== 0) {
                resultado += ' y ' + unidades[unidad];
            }
        } else if (numero === 100) {
            resultado = 'cien';
        } else if (numero > 100 && numero < 1000) {
            let centena = Math.floor(numero / 100);
            let resto = numero % 100;
            resultado = centenas[centena];
            if (resto > 0) {
                resultado += ' ' + (resto);
            }
        }
        const respElement = document.getElementById('resp')
        respElement.innerHTML = `El número ${numero} en letras es: ${resultado}`       
    }
    Vueltobilletes(){
    let costo = parseFloat(document.getElementById("costo").value);
    let pago = parseFloat(document.getElementById("pago").value);

    let vuelto = pago - costo;
    let respuesta = "";
    let billetes = [100, 50, 20, 10, 5, 1]; // Valores de billetes considerados

    let primerBilleteAgregado = false;

    for (let valor of billetes) {
        // Calcula la cantidad de billetes 
        let cantidad = Math.floor(vuelto / valor);
        
        if (cantidad > 0) {
            vuelto %= valor
            
            if (primerBilleteAgregado) {
                respuesta += ", "
            }
            
            if (valor === 1) {
                respuesta += `${cantidad} billete de 1`;
            } else {
                respuesta += `${cantidad} billetes de ${valor}`;
            }
            
            primerBilleteAgregado = true;
        }
    }
    let resp = document.getElementById("resp");
    resp.textContent = `El vuelto es ${pago - costo}: En cantidad de billetes son: ${respuesta}`
 
    }

    estudiantes(){
      const notas = [
        {nombre:"ana",n1:10,n2:20},{nombre:"dan",n1:20,n2:10},{nombre:"jose",n1:30,n2:50},
        {nombre:"miguel",n1:40,n2:40},
      ]
    
      let est,prom
      for(let i=0;i<notas.length;i++){
        est = notas[i]
        prom = (est.n1+est.n2)/2
        console.log(est.nombre,prom)
      }
    }
}
const arreg = new Arreglos()

