 let inventario = [];

        function agregarProducto() {
            let nombre = document.getElementById("nombre").value;
            let cantidad = document.getElementById("cantidad").value;
            let precio = document.getElementById("precio").value;

            inventario.push([nombre, cantidad, precio]);

            alert("Producto agregado: " + inventario);
        }

    function mostrarInventario() {
        let lista = "";
        for (let i = 0; i < inventario.length; i++) {
            lista += "Nombre: " + inventario[i][0] +
                     ", Cantidad: " + inventario[i][1] +
                     ", Precio: " + inventario[i][2] ;
        }
        alert ("Esta es la lista del inventario: " + lista);
    }

    function calcularTotal() {
        let total = 0;
        for (let i = 0; i < inventario.length; i++) {
            let cantidad = (inventario[i][1]);
            let precio =(inventario[i][2]);
            total += cantidad * precio;
        }
        alert("El total del inventario es: " + total + " euros");
    }