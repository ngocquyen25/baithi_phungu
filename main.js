
window.onload = function() {
    var cards = document.querySelectorAll('.card');
    var modal = document.querySelector('.modal');
    var overlay = document.querySelector('.overlay');
    var close = document.querySelector('.close');
    var img = document.querySelectorAll('.card-img-top');
    var text = document.querySelectorAll('.card-text');
    var price_start = document.querySelectorAll('.price-start');
    var sale_price = document.querySelectorAll('.sale-price');
    var modal_img = document.querySelector('.modal-img');
    var modal_title = document.querySelector('.modal-title');
    var modal_price = document.querySelector('.col-right--price');
    var minus = document.querySelector('.minus');
    var number = document.querySelector('.number');
    var plus = document.querySelector('.plus');
    var alert = document.querySelector('.alert');
    var QuantityDefault = 1;
    var size = document.querySelectorAll('.size-item');
    
    var buy_btn = document.querySelector('.buy-btn');
    
    
    


    const order = function(){
        window.location.href = 'dathang.html'
    }

    var sizeActive = null
    for(let i = 0; i < size.length; i++){
        size[i].addEventListener('click', function(){
            if(sizeActive !== null){
                sizeActive.classList.remove('active');
            }
            sizeActive = size[i]
            sizeActive.classList.add('active');
            alert.style.display = 'none';
        })
    }
    
    const handleShowModal = function(){
        modal.classList.add('active');
        modal.classList.remove('remove');
        overlay.style.display = 'block';
    }
     
    const handleGetContent = function(i){
        var img_card = img[i].getAttribute('src');
        modal_img.setAttribute('src', img_card)
        modal_title.innerText = text[i].innerText
        modal_price.innerText = price_start[i].innerText;
        var data ={
            image: img[i].getAttribute('src'),
            name: text[i].innerText,
            price: price_start[i].innerText,
            sale_price: sale_price[i].innerText,
            
            
        }
        for(let j = 0; j <size.length; j++){
            size[j].addEventListener('click', function(){
                data.size = size[j].innerText
            })
        }
        buy_btn.addEventListener('click', function(){
            data.number = number.innerText
            localStorage.setItem('myData', JSON.stringify(data));
            if(sizeActive !== null){
                if(sizeActive.classList.contains('active')){
                    order()
                }
            }
            if(sizeActive === null){
                alert.style.display = 'block';
            }
            
        })
     }
    
    

    const plusQuantity = function(){
        QuantityDefault += 1;
        
        if(QuantityDefault > 4){
            QuantityDefault = 4;
        }
        number.innerText = QuantityDefault;
    }

    const minusQuantity = function(){
        QuantityDefault -= 1;
        if(QuantityDefault < 1){
            QuantityDefault = 1
        }
        number.innerText = QuantityDefault;
    }
    
    if(cards.length > 0){
        plus.addEventListener('click', function(){
            plusQuantity();
        })
    
        minus.addEventListener('click', function(){
            minusQuantity();
        })
    }
    
     for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function() {
            handleShowModal(i);
            handleGetContent(i);
             
        });
    }
    
    if(cards.length > 0){
        close.addEventListener('click', function() {
            modal.classList.add('remove');
            overlay.style.display = 'none';
            number.innerText = 1;
        })
    }
    
};
