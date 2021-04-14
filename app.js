let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".pricing-item-price-after"),
    price = document.querySelector(".pricing-item-price-amount"),
    switcher = document.querySelector(".checkbox"),
    range = document.querySelector(".price");
    
// Change price between month and year with discount
switcher.onclick = function(){

    if(myCheckbox.checked == true){
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;
    } else {
        refreshPrices();
        duration.textContent = `/month`;
    }
}

// generate price on range
let pageViews = document.querySelector(".pageviews-slider-value");
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    if(range.value == 1){
        if(myCheckbox.checked == true) {
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        } else {
            price.textContent = 8;
        }
        pageViews.textContent = "10K PAGEVIEWS";
    } 

    if(range.value == 2){
        if(myCheckbox.checked == true){
            price.textContent = 108;
        } else {
            price.textContent = 12;
        }
        pageViews.textContent = "50K PAGEVIEWS";
    }

    if(range.value == 3){
        if(myCheckbox.checked == true){
            price.textContent = 144;
        } else {
            price.textContent = 16;
        }
        pageViews.textContent = "100K PAGEVIEWS";
    }

    if(range.value == 4){
        if(myCheckbox.checked == true){
            price.textContent = 216;
        } else {
            price.textContent = 24;
        }
        pageViews.textContent = "500K PAGEVIEWS";
    }

    if(range.value == 5){
        if(myCheckbox.checked == true){
            price.textContent = 324;
        } else {
            price.textContent = 36;
        }
        pageViews.textContent = "1M PAGEVIEWS";
    }
}


document.getElementById("price").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(223, 50%, 87%) ' + value + '%, hsl(223, 50%, 87%) 100%)'
  };