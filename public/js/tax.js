let toggle = document.getElementById("switchCheckDefault");

toggle.addEventListener("click", () => {
    let priceElements = document.getElementsByClassName("price");
    let taxInfoElements = document.getElementsByClassName("empty");

    for (let i = 0; i < priceElements.length; i++) {
        let priceEl = priceElements[i];
        let taxInfo = taxInfoElements[i];

        let basePrice = parseFloat(priceEl.getAttribute("data-base"));

        if (!toggle.checked) {
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