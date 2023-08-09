class Numeros{
    multiplo(){
        let num = document.getElementById("num").value
        let mul = document.getElementById("multi").value
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        num = parseInt(num)
        mul = parseInt(mul)  
        if(num % mul ==0){
            resp.textContent = `${mul} Es multiplo de ${num}`
        } else{ 
            resp.textContent = `${mul} No es multiplo de ${num}`
        }        
    }
    vuelto(){
        let cantidadProductos = parseInt(document.getElementById("cp").value);
        let precio = parseFloat(document.getElementById("precio").value);
        let iva = parseFloat(document.getElementById("iva").value);
        let pago = parseFloat(document.getElementById("pago").value);
        let resp = document.getElementById("resp");
      
        let totalCompra = (precio + (precio * iva)) * cantidadProductos;
        let vuelto = pago - totalCompra;
      
        if (vuelto >= 0) {
          resp.textContent = "El vuelto es: $" + vuelto.toFixed(2);
        } else {
          resp.textContent = "El pago es insuficiente.";
        }
      }
    divisores(){
        let c=1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = ""
        while (c < num){
            if (num % c == 0 ) {
                console.log(c)
                divisores = divisores+ "  " + c.toString()
            }
            c=c+1
        }
        resp.textContent = divisores
    }
     sumDi(){
        let  suma=0
        let i=1;
        let num2=document.getElementById("num").value
        let sum=document.getElementById("resp")
        while(i<=num2){
            if(num2%i==0){
                suma=suma+i
            }
            i=i+1


        }
        sum.textContent=`La suma de los divisores de ${num2} es ${suma}`
    }

    cantidadDivisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let catadigito = "";
        let cd = 0;
        for (let c = 1; c <= num; c++) {
        if (num % c === 0) {
          cd++;
         catadigito += " " + cd.toString();
        }
  }
        resp.textContent = cd;
    }
    cantidadD(){
        let num11=document.getElementById("num").value
        let dig=document.getElementById("resp")
        let con=0
        while(num11>0){
            num11=parseInt(num11/10)
            con=con+1

        }
        dig.textContent=`La cantidad de digitios son ${con}`
          }
          
    Factorial(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let factorial = 1;
        let i = 1;
        if (num < 0) {
        console.log("El factorial no está definido para números negativos.");
        return;
        }
        while (i <= num) {
        factorial *= i;
        i=i+1
        }
        resp.textContent = (` El factorial de ${num} es ${ factorial }`);
    }
    Perfecto(){
        console.log ("Perfecto")
        let num = parseInt(document.getElementById("num").value)
        let res = document.getElementById("resp")
        let r = 0
        let c = 1
        let ac = 0
        while (c < num){
            r = num % c
            if (r == 0){
                ac = ac + c
            }
            c = c + 1
        }
        if (ac == num){   
            res.textContent = `${num} Es Perfecto`
        }else{
            console.log (num, "No es Perfecto")
            res.textContent = `${num} No Perfecto`
        }
    }
       
    Amigos(){
        let num1 = document.getElementById ("num1").value
        let num2 = document.getElementById ("num2").value
        let resp = document.getElementById ("resp")
        let Amigos = ""
        let cont1 = 0
        let cont2 = 0
        while (cont1<= num1) {
            if (num1 % cont1 === 0)
            console.log = (num1)
            cont1 = num1 + cont1 
        } 
        while (cont2 <= num2) {
            if (num2 % cont2 === 0)
            console.log = (num2)
            cont2 = num2 + cont2 
        } 

        resp.textContent = Amigos
       if (cont1 == cont2){ 
            resp.textContent = `${num1} Es amigo de ${num2}`
       } else {
            resp.textContent = `${num1} No es amigo de ${num2}`

        }
  }
    primo(){
        let num7=document.getElementById("num").value
        let cantidad2=0
        let i=1
        let pri=document.getElementById("resp")
        while(i<=num7){
            if(num7%i==0){
                cantidad2=cantidad2+1
            }
            i=i+1


        }
        if(cantidad2==2){
            pri.textContent=`El numero ${num7} es primo`

        }else{
            pri.textContent=`EL numero ${num7} no es primo`
        }

    }
          
    Gemelos(){
        let num8=document.getElementById("num1").value
        let num9=document.getElementById("num2").value
        let pg=document.getElementById("resp")
        let p=num8
        let q=num9
        let cant=0
        let cant2=0
        let j=1
        let h=1

        while(j<=p){
            if(p%j==0){
                cant=cant+1
            }
            j=j+1


        }
        while(h<=q){
            if(q%h==0){
                cant2=cant2+1
            }
            h=h+1


        }
        if(cant==2 && cant2==2){
            if((p>q ||q>p)&&(p-q==2||q-p==2)){
                pg.textContent=`Los numero ${p} y ${q} son primos gemelos`
            }else{
                pg.textContent=`Los numero ${p} y ${q} no son primos gemelos`
    
            }
        }else{
            pg.textContent=`Los numeros ${p} y ${q} no son primos`
        }
    } 
    Invertido(){
        let num10=document.getElementById("num").value
        let inv=document.getElementById("resp")
        let r=0
        let invertir=""
        while(num10>0){
            r= num10%10
            invertir=invertir+r.toString()
            num10=parseInt(num10/10)

        }
        inv.textContent=invertir
        }
    Exponente(){
        let num13=document.getElementById("base").value
        num13=parseInt(num13)
        let num14=document.getElementById("exponente").value
        num14=parseInt(num14)
        let exp=document.getElementById("resp")
        let expo=1
        let i=1
        while(i<=num14){
            expo=expo*num13
            i=i+1
        }
        
        exp.textContent=`El resultado del numero ${num13} con el exponente ${num14} es ${expo}`

    }
          
    tablaMultiplicar(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let tabla = "";
        let c = 1
        while (c <= 12){
          let r = num * c;
          tabla += num + " x " + c + " = " + r + "<br>";
          c=c+1
        }
      
        resp.innerHTML = tabla;
    }
    
    Fibonaci(){
        let a = 0, b = 1, c = 1, cont = 1
        let n = parseInt(document.getElementById("n").value)
        let res = document.getElementById("resp")
        let serie = a.toString() + "<br>" + b.toString()
        while (cont < n){
            c = a + b
            serie = serie + "<br>"+ c.toString()
            a = b
            b = c
            cont = cont + 1
        }
        res.innerHTML = serie
    }

}
const numero = new Numeros()