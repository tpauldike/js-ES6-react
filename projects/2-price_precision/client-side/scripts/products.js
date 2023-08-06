const addNewProductBtn = document.querySelector("#add-new-product-btn");
const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#close");
const addProductBtn = document.querySelector("#add-product-btn");

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

addProductForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	// console.log("Product added successfully")

	// Get the form data
	// const productData = new FormData(e.target)
	// const productDataObject = Object.fromEntries(productData.entries())
	// console.log(productDataObject)
	const productNameInput = document.getElementById("product_name");
	const priceInput = document.getElementById("price");
	const perInput = document.getElementById("per");
	const statusInput = document.getElementById("status");
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
			addProductForm.reset();
		}
	} catch (error) {
		console.log("Error ==>", error);
	}
});
