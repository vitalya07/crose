const cart = [];
const cartItems = document.querySelector('.header__cart-items');
const cartPrice = document.querySelector('.header__cart-footer--price__num');
const productEl = document.querySelectorAll('.product__item');
productEl.forEach(product => {
    const plus = product.querySelector('.product__item-plus');
    const minus = product.querySelector('.product__item-minus');
    const quenty = product.querySelector('.product__item-quenty');
    const btnToCart = product.querySelector('.product__item-btn');

    const productImg = product.querySelector('img').src;
    const productTitle = product.querySelector('.product__item-title').textContent;
    const productPrice = product.querySelector('.product__item-price').textContent;
    let coll = 0;
    


    
    plus.addEventListener('click', inncrimentProduct);
    minus.addEventListener('click', discrementProduct);
    btnToCart.addEventListener('click', addToCart);













    function inncrimentProduct() {
        coll++;
        quenty.textContent = `${coll}`;  
    };

    function discrementProduct() {
        coll --;
        if(coll < 0) {
            coll = 0;            
        }      
        quenty.textContent = `${coll}`
    };

    function addToCart() {      

        const product = {
            img: productImg,
            title: productTitle,
            price: productPrice,
            quenty: coll
        };

        cart.push(product);

        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <div class="header__cart-item">
                <div class="header__cart-item--img">
                    <img src="${productImg}" alt="product">
                </div>
                <div class="header__cart-item--name">${productTitle}</div>
                <div class="header__cart-item--coll">
                    <div class="header__cart-item--minus">-</div>
                    <div class="header__cart-item--quenty">${coll}</div>
                    <div class="header__cart-item--plus">+</div>
                </div>
                <div class="header__cart-item--price">${productPrice}</div>
                <div class="header__cart-item--dell">
                    <img src="icons/delete.svg" alt="dell">
                </div>
            </div>
        `;
        
        cartItems.append(cartItem);        
        console.log(cart);
        coll = 0;
        quenty.textContent = `${coll}`;
        
    };
   
});





