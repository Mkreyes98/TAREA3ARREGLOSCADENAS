class Cadenas{
    Vocalesconsonantes(){
        let frase=document.getElementById ("datos").value
        let cv=0
        let cc=0
        let resp=document.getElementById ("resp")
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
                cv=cv+1
             }
             if (frase[i]>= 'a' && frase[i]<= 'z' ) {
                cc=cc+1
             }

        }
        let.table({cv,cc})
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`

    }
    Palabrasfrase(){
        
        let frase = document.getElementById('frase').value;
        let palabras = frase.split(' ');
        let numeroPalabras = palabras.length;

        let resp = document.getElementById('resp');
        resp.textContent = `La frase tiene ${numeroPalabras} palabras.`;

    }
    Caracterespecial(){
        let frase = document.getElementById('frase').value;
        let caracteresEspeciales = (frase.match(/[,.;:]/g) || []).length;

        let respElement = document.getElementById('resp');
        respElement.innerHTML = `<p>Total de caracteres especiales: ${caracteresEspeciales}</p>`;
    
    }
    Fraseigual(){
        let frase = document.getElementById("frase").value.toLowerCase()// Eliminar espacios y convertir a minúsculas
        let reverso = frase.split('').reverse().join('')
    
        let resp = document.getElementById("resp")
        if (frase === reverso) {
            resp.textContent = `La cadena [${frase}] se lee igual de incio a fin`
        } else {
            resp.textContent = `La cadena ${frase}] la frase no se lee igual`
        }
      }

    Fraseinvertida(){
        let frase = document.getElementById("frase").value; // Obtener la frase del elemento de entrada
        let nuevafrase = ""; // Variable para almacenar la frase invertida
    
        for (let i = frase.length - 1; i >= 0; i--) {
            nuevafrase += frase[i];
        }
        let respElement = document.getElementById('resp');
        respElement.innerHTML = `Frase invertida: ${nuevafrase}`;

    }
    Concatenar(){
        let frase1 = document.getElementById("frase1").value
        let frase2 = document.getElementById("frase2").value
        let contatenar = frase1 + frase2

        let resp= document.getElementById('resp');
        resp.textContent = `Frase contatenar ${contatenar}`;

    
    }
    Buscar(){
        let frase = document.getElementById("frase").value;
        let buscar = document.getElementById("buscar").value;
        let pos = 0;
        let encontrada = false;
    
        while (pos < frase.length) {
            if (buscar === frase[pos]) {
                encontrada = true;
                break;
            }
            pos = pos + 1;
        }
    
        let resp = document.getElementById("resp");
        if (encontrada) {
            resp.textContent = `La palabra "${buscar}" se encuentra en la posición: ${pos}`;
        } else {
            resp.textContent = `La palabra "${buscar}" no se encontró en la frase.`;
         }
        
    }
    Subcadena(){
        let cadena = document.getElementById("cadena").value;
        let subcadena = document.getElementById("subcadena").value;
    
        let posicion = -1;
    
        for (let i = 0; i <= cadena.length - subcadena.length; i++) {
            if (cadena.substring(i, i + subcadena.length) === subcadena) {
                posicion = i;
                break;
            }
        }
    
        let resp = document.getElementById("resp");
        if (posicion !== -1) {
            resp.textContent = `La subcadena "${subcadena}" se encuentra en la posición: ${posicion}`;
        } else {
            resp.textContent = `La subcadena "${subcadena}" no se encontró en la cadena.`;
        }
    }
    Insertarsubcadena(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             let resp = document.getElementById("resp")
             resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }
    }
    Eliminarsubcadena(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux = "";
    
        if (posicion >= 0 && posicion <= cadena.length) {
            aux = cadena.substring(0, posicion) + cadena.substring(posicion + subcadena.length)
    
            let resp = document.getElementById("resp")
            resp.textContent = `Cadena nueva: ${aux}`
        } else {
            alert("La posición no es válida")
        }
    }
    Convertirfrase(){
        let frase = document.getElementById("frase").value;
        let separador = document.getElementById("separador").value;
        let arreglo = frase.split(separador);
        let nuevacadena = arreglo.map(item => `"${item}"`).join(separador);
   
        let resp = document.getElementById("resp");
        resp.textContent  = "[" + nuevacadena + "]";
  
  
    
    }
    Sumafrase(){
        let frase = document.getElementById('frase').value
        let resp = document.getElementById('resp')
        
        let cadena = frase
        
        let suma = 0;
        for (let i = 0; i < cadena.length; i++) {
          if (parseInt(cadena[i])) {
            suma += parseInt(cadena[i])
          }
        }
        
        resp.textContent = `La suma de los dígitos en la cadena es: ${suma}`
    }
}
const cade = new Cadenas()
