function FORMULA(a, b, c) {
 
  let discriminante = (b ** 2 - 4 * a * c);
  if (discriminante > 0){
    let x1 = -b + Math.sqrt(discriminante)/ (2*a);
    let x2 = -b - Math.sqrt(discriminante)/ (2*a);
    return "Dos soluciones" + x1 + " y "+ x2;
  }
    else if(discriminante == 0){
      let x1 =  -b / (2*a);
      return console.log("Una solucion doble x1=" +x1, "x2="+x1 )
    }
    else if (discriminante < 0){
      return "Sin solución"
    }    
}
