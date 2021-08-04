const price = document.querySelector("#price");
const priceSpan = document.querySelector("#price-span");

price.addEventListener("input", (e) => {
	console.log(price.value);
	priceSpan.textContent = price.value	
})

