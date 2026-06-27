const form = document.querySelector('#formProducto');
const nombre = document.querySelector('#nombre');
const precio = document.querySelector('#precio');
const stock = document.querySelector('#stock');
const mensaje = document.querySelector('#mensaje');
const tablaProductos = document.querySelector('#tablaProductos');
form.addEventListener('submit', (event) => {
event.preventDefault();
const nombreProducto = nombre.value.trim();
const precioProducto = Number(precio.value);
const stockProducto = Number(stock.value);
if (nombreProducto.length < 3) {
mostrarMensaje('El nombre debe tener al menos 3 caracteres.', 'error');
return;
}
if (precioProducto <= 0) {
mostrarMensaje('El precio debe ser mayor que cero.', 'error');
return;
}
if (stockProducto < 0) {
mostrarMensaje('El stock no puede ser negativo.', 'error');
return;
}
agregarProducto(nombreProducto, precioProducto, stockProducto);
mostrarMensaje('Producto agregado correctamente.', 'exito');
form.reset();
nombre.focus();
});
function agregarProducto(nombreProducto, precioProducto, stockProducto) {
const fila = document.createElement('tr');
fila.innerHTML = `
<td>${nombreProducto}</td>
<td>$${precioProducto}</td>
<td>${stockProducto}</td>
`;
tablaProductos.appendChild(fila);
}
function mostrarMensaje(texto, tipo) {
mensaje.textContent = texto;
mensaje.className = tipo;
}