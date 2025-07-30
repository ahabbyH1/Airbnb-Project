let smallToggle = document.getElementById("switchCheckSmall");
let largeToggle = document.getElementById("switchCheckLarge");


smallToggle.addEventListener("click", () => {
    let priceElements = document.getElementsByClassName("price");
    let taxInfoElements = document.getElementsByClassName("empty");

    for (let i = 0; i < priceElements.length; i++) {
        let priceEl = priceElements[i];
        let taxInfo = taxInfoElements[i];

        let basePrice = parseFloat(priceEl.getAttribute("data-base"));

        if (!smallToggle.checked) {
            // GST OFF
            priceEl.innerHTML = `&#8377; ${basePrice.toLocaleString("en-IN")} &nbsp;<i class="empty" style="display: none;"></i>`;
        } else {
            // GST ON
            let gst = basePrice * 0.18;
            let total = basePrice + gst;
            priceEl.innerHTML = `&#8377; ${total.toLocaleString("en-IN")} &nbsp;<i class="empty" style="display: inline;">(Includes ₹${gst.toFixed(2)} GST)</i>`;
        }
    }
});
largeToggle.addEventListener("click", () => {
    let priceElements = document.getElementsByClassName("price");
    let taxInfoElements = document.getElementsByClassName("empty");

    for (let i = 0; i < priceElements.length; i++) {
        let priceEl = priceElements[i];
        let taxInfo = taxInfoElements[i];

        let basePrice = parseFloat(priceEl.getAttribute("data-base"));

        if (!largeToggle.checked) {
            // GST OFF
            priceEl.innerHTML = `&#8377; ${basePrice.toLocaleString("en-IN")} &nbsp;<i class="empty" style="display: none;"></i>`;
        } else {
            // GST ON
            let gst = basePrice * 0.18;
            let total = basePrice + gst;
            priceEl.innerHTML = `&#8377; ${total.toLocaleString("en-IN")} &nbsp;<i class="empty" style="display: inline;">(Includes ₹${gst.toFixed(2)} GST)</i>`;
        }
    }
});