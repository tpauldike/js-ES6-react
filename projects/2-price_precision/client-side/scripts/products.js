const addNewProductBtn = document.querySelector("#add-new-product-btn")
const backdrop = document.querySelector("#backdrop")
const closeBtn = document.querySelector("#close")
const addProductBtn = document.querySelector("#add-product-btn")

addNewProductBtn.addEventListener('click', function(){
    backdrop.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    backdrop.style.display = 'none'
})