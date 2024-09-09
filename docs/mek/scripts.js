

function copyCoupon() {
    var couponCodeText = document.getElementById("couponCode").textContent.split(": ")[1];
    navigator.clipboard.writeText(couponCodeText).then(function() {
        alert('Cupom copiado: ' + couponCodeText);
    }, function(err) {
        console.error('Erro ao copiar o cupom: ', err);
    });
}

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function updatePromoCount() {
    var promoCount = document.getElementsByClassName("coupon").length;
    document.getElementById("promoCount").textContent = promoCount;
}

// Update the promotion count on page load
document.addEventListener("DOMContentLoaded", updatePromoCount);
