const addNewProductBtn = document.querySelector("#add-new-product-btn");
const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#close");
const addProductBtn = document.querySelector("#add-product-btn");
const tableBody = document.querySelector("#table-body");

addNewProductBtn.addEventListener("click", function () {
	backdrop.style.display = "block";
});

closeBtn.addEventListener("click", function () {
	backdrop.style.display = "none";
});

const addProductForm = document.getElementById("product-form");
const baseUrl = "http://localhost:4001";
const userToken = localStorage.getItem("userToken");
const initials = localStorage.getItem("initials");

document.getElementById("initials").innerHTML = initials


const productNameInput = document.getElementById("product_name");
const priceInput = document.getElementById("price");
const perInput = document.getElementById("per");
const statusInput = document.getElementById("status");
// Handle form submission for adding new product
if (addProductBtn.innerHTML === "Add Product"){
	addProductForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		// console.log("Product added successfully")
	
		// Get the form data
		// const productData = new FormData(e.target)
		// const productDataObject = Object.fromEntries(productData.entries())
		// console.log(productDataObject)
		// const statusInput2 = document.getElementById("status2")
	
		const productData = {
			product_name: productNameInput.value,
			price: priceInput.value,
			per: perInput.value,
			product_status: statusInput.checked ? "Available" : "Out of stock",
		};
	
		// console.log(productData);
	
		try {
			const response = await fetch(`${baseUrl}/products/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userToken}`,
				},
				body: JSON.stringify(productData),
			});
			const data = await response.json();
			console.log(data);
			if (data.message === "Product Created successfully") {
				alert(data.message);
				backdrop.style.display = "none";
				addProductForm.reset();
				fetchAllProducts();
			}
			
		} catch (error) {
			console.log("Error ==>", error);
		}
	});
}

// fetch all products
const fetchAllProducts = async () => {
	try {
		const response = await fetch(`${baseUrl}/products/all`, {
			headers: { Authorization: `Bearer ${userToken}`,}
		});

		tableBody.innerHTML = ""; // Clear existing table rows
		const data = await response.json();
		// console.log(data)
		if (data.message === "All products retrieved successfully") {
			data.products.forEach( (product) => {
				const rows = document.createElement("tr");
				rows.innerHTML = `
					<td>${product.product_name}</td>
					<td>${product.price}</td>
					<td>${product.per}</td>
					<td>${product.order_no}</td>
					<td>${product.product_status}</td>
					<td>
						<button class="edit-btn" data-id=${product.order_no}>Edit</button> 
						<button class="delete-btn" data-id=${product.order_no}>Delete</button> 
					</td>
				`;
				tableBody.appendChild(rows);
			})
		}
	} catch (error) {
		console.log("Error ==>", error);
	}
}

// Fetch Products when the page loads
fetchAllProducts();

// Handle Product edit and delete 
tableBody.addEventListener("click", async(e) => {
	e.preventDefault()
	const target = e.target;
	const order_no = target.dataset.id

	if (target.classList.contains("edit-btn")) {
		
		try {
			const response = await fetch(`${baseUrl}/products/${order_no}`, {
				headers: { Authorization: `Bearer ${userToken}` },
			});
			const data = await response.json();
			console.log(data);
			if (data.message === "Product retrieved successfully") {
				document.getElementById("backdrop-heading").innerHTML = "Edit Product";
				addProductBtn.innerHTML = "Save";
				backdrop.style.display = "block";


				document.getElementById("product_name").value = data.product[0].product_name;
				document.getElementById("price").value = data.product[0].price
				document.getElementById("per").value = data.product[0].per
				// check the radio button based on the product_status
				if (data.product[0].product_status === "Available") {
					document.getElementById("status").checked = true
				} else {
					document.getElementById("status2").checked = true
				}
			}

			// Handle Updating Product
			if (addProductBtn.innerHTML === "Save") {
				addProductForm.addEventListener("submit", async(e) => {
					e.preventDefault();
					const updatedProductData = {
						product_name: productNameInput.value,
						price: priceInput.value,
						per: perInput.value,
						product_status: statusInput.checked	? "Available" : "Out of stock",
					};

					try {
						const response = await fetch(`${baseUrl}/products/${order_no}`, {
							method: "PUT",
							headers: { 
								"Content-Type": "application/json",
								Authorization: `Bearer ${userToken}`
							},
							body: JSON.stringify(updatedProductData)
						});
						const data = await response.json();
						// console.log(data);
						if (data.message === "Product updated successfully") {
							alert(data.message);
							backdrop.style.display = "none";
							addProductForm.reset();
							fetchAllProducts();
						}
					} catch (error) {
						console.log("Error ==>", error);
					}
				})
			}
		} catch (error) {
			console.log("Error ==>", error);
		}

	} else if (target.classList.contains("delete-btn")) {
		try {
			const response = await fetch(`${baseUrl}/products/${order_no}`, {
				method: "DELETE",
				headers: { Authorization: `Bearer ${userToken}` },
			});
			const data = await response.json()

			if (data.message === "Product deleted successfully") {
				alert(data.message);
				fetchAllProducts();
			}
		} catch (error) {
			console.log("Error ==>", error);
		}
	}
})