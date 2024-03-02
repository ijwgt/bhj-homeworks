const inc = document.querySelectorAll('.product__quantity-control_inc');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

inc.forEach(incItem => {
	incItem.addEventListener('click', (e) => {
		++e.target.parentElement.querySelector('.product__quantity-value').textContent;
	})
})

dec.forEach(decItem => {
	decItem.addEventListener('click', (e) => {
		--e.target.parentElement.querySelector('.product__quantity-value').textContent;
		if(e.target.parentElement.querySelector('.product__quantity-value').textContent < 1){
			e.target.parentElement.querySelector('.product__quantity-value').textContent = 1;
		}
	})
})

function createItem(id, quantity, imageUrl){
	const div = document.createElement('div');
	cartProducts.appendChild(div);
	div.outerHTML = `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src="${imageUrl}"><div class="cart__product-count">${quantity}</div>`;
};

function incQuantityCart(product, quantity){
	product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + Number(quantity);
};

function addItem(product){
	product.id = product.dataset.id;
    product.quantity = product.querySelector('.product__quantity-value').textContent;
    product.image = product.querySelector('.product__image').src;
	if (cartProducts.children.length > 0 && Array.from(cartProducts.children).find(elem => elem.dataset.id === product.id)){
		incQuantityCart(Array.from(cartProducts.children).find(elem => elem.dataset.id === product.id), product.quantity);
	} else {
        createItem(product.id, product.quantity, product.image);
    }
};
	
productAdd.forEach(btn => {
    btn.addEventListener('click', e => {
        addItem(e.target.closest('.product'));
    })
});
