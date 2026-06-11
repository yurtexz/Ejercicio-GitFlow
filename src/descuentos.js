function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  if (descuento === 'estudiante'){
    return precio*0.85
  }
  
  return precio - descuento;
}

module.exports = { calcularTotal };
