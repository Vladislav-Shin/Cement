function calc() {
	const price = document.querySelector("#quantity");
	const priceSpan = document.querySelector("#amount-span");
	const selectBtn = document.querySelector(".calculator-select");
	const calculate = document.querySelector("#calculate");

	let priceA = 0;
	let col = 0

	price.addEventListener("input", () => {
		priceSpan.textContent = price.value;
		priceA = price.value
	})

	selectBtn.addEventListener("change", function () {
		document.querySelector(".calculator__price").textContent = this.value
		col = this.value
	})

	calculate.addEventListener("click", () => {
		const price = priceA * col;
		document.querySelector("#total-price").textContent = price
	})
}

if(document.querySelector("#quantity")) {
	calc()
}
