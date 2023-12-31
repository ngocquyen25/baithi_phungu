// Tạo một event listener để nghe sự kiện myCustomEvent
// window.onload = function(){
//     window.addEventListener('myCustomEvent', function(event) {
//         const retrievedData = event.detail;
//         var detail_img = document.querySelector('.detail-img');
//         var name = document.querySelector('.name');
//         var sale = document.querySelector('.sale');
//         var form_price = document.querySelector('.form-price');
//         var quantity = document.querySelector('.quantity');
    
       
//             console.log(retrievedData);
//             detail_img.setAttribute('src', retrievedData.image);
//             // Xử lý dữ liệu nhận được
        
//             console.log(retrievedData);
//     });
// }

// Lấy dữ liệu từ local storage
var detail_img = document.querySelector('.detail-img');
var nameProd = document.querySelector('.name');
var sale = document.querySelector('.sale');
var form_price = document.querySelector('.form-price');
var quantity = document.querySelectorAll('.quantity');
var number = document.querySelector('.countProd');
var size = document.querySelector('.size');
const retrievedData = JSON.parse(localStorage.getItem('myData'));
detail_img.setAttribute('src', retrievedData.image);
nameProd.innerText = retrievedData.name;
var sale_price = parseFloat(retrievedData.sale_price);
var price = parseFloat(retrievedData.price);
var count_number = parseFloat(retrievedData.number);
sale.innerText = `Khuyến mãi 50%, Giảm giá: ${sale_price/2}00`;
form_price.innerText = retrievedData.price;
for(let i = 0; i < quantity.length; i++){
    quantity[i].innerText = `${price * count_number}.000`
}
number.innerText = `Đơn Hàng( ${retrievedData.number} Sản phẩm)`;
size.innerText = `Size: ${retrievedData.size}`
console.log(retrievedData.number)


       
        
 