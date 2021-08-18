function calc() {
	const quantity = document.querySelector("#quantity");
	const priceSpan = document.querySelector("#amount-span");
	const selectBtn = document.querySelector(".calculator-select");
	const selectedProduct = document.querySelector("#select-product");
	document.querySelector(".calculator__price").textContent = selectedProduct.value
	let priceA = parseInt(quantity.value);
	let col = parseInt(selectedProduct.value);

	quantity.addEventListener("input", () => {
		priceSpan.textContent = quantity.value;
		priceA = quantity.value;
		priceFun()
	})

	function priceFun() {
		const quantity2 = priceA * col;
		document.querySelector("#total-price").textContent = quantity2
	}

	function selectFun() {
		document.querySelector(".calculator__price").textContent = this.value
		priceA = quantity.value
		col = this.value
		priceFun()
	}

	selectBtn.addEventListener("change", selectFun)
}

if (document.querySelector("#quantity")) {
	calc()
}