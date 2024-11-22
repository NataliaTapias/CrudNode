// Variables para interactuar con el DOM
const productList = document.getElementById('product-list');
const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const submitButton = productForm.querySelector('button[type="submit"]'); // El botón de submit

// Variable para almacenar el ID del producto que se está editando (si es necesario)
let editingProductId = null;

// Mostrar productos en la lista
function displayProducts() {
    // Limpiar la lista de productos
    productList.innerHTML = '';

    // Hacer una solicitud GET para obtener los productos
    fetch('http://backend:5000/api/items')
        .then(response => response.json())
        .then(products => {
            products.forEach((product) => {
                const li = document.createElement('li');
                li.textContent = product.name;

                // Botón para eliminar
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = () => deleteProduct(product.id);

                // Botón para editar
                const editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.onclick = () => editProduct(product);

                // Agregar los botones al li
                li.appendChild(editButton);
                li.appendChild(deleteButton);
                productList.appendChild(li);
            });
        })
        .catch(err => console.error('Error al cargar productos:', err));
}

// Función para editar un producto
function editProduct(product) {
    // Establecer el valor del campo de entrada al nombre del producto
    productNameInput.value = product.name;
    editingProductId = product.id; // Guardar el ID del producto a editar

    // Cambiar el texto del botón a "Actualizar Producto"
    submitButton.textContent = 'Actualizar Producto';
}

// Agregar o editar un producto
function addOrEditProduct(e) {
    e.preventDefault();
    const productName = productNameInput.value.trim();

    if (productName) {
        const productData = { name: productName };

        if (editingProductId) {
            // Si estamos editando un producto, hacemos una solicitud PUT
            fetch(`http://backend:5000/api/items/${editingProductId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            })
            .then(response => response.json())
            .then(() => {
                productNameInput.value = ''; // Limpiar el campo de entrada
                editingProductId = null; // Resetear la variable de edición

                // Cambiar el texto del botón de vuelta a "Agregar Producto"
                submitButton.textContent = 'Agregar Producto';

                displayProducts(); // Actualizar la lista de productos
            })
            .catch(err => console.error('Error al editar producto:', err));
        } else {
            // Si no estamos editando, agregamos un nuevo producto
            fetch('http://backend:5000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            })
            .then(response => response.json())
            .then(() => {
                productNameInput.value = ''; // Limpiar el campo de entrada
                displayProducts(); // Actualizar la lista de productos
            })
            .catch(err => console.error('Error al agregar producto:', err));
        }
    }
}

// Eliminar un producto
function deleteProduct(id) {
    fetch(`http://backend:5000/api/items/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        displayProducts(); // Actualizar la lista después de eliminar
    })
    .catch(err => console.error('Error al eliminar producto:', err));
}

// Manejar el envío del formulario para agregar o editar
productForm.addEventListener('submit', addOrEditProduct);

// Inicializar la lista de productos al cargar la página
displayProducts();
