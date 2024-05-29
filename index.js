const image= document.getElementById('productImg');
const btn=document.getElementsByClassName('btn');


let selectedColor = '';
let selectedSize = '';


const colorLabels = document.querySelectorAll('.select-color label');
colorLabels.forEach((label) => {
  label.addEventListener('click', function() {
    selectedColor = label.querySelector('input').id;
  });
});

// Size selection
const sizeLabels = document.querySelectorAll('.select-size label');
sizeLabels.forEach((label) => {
  label.addEventListener('click', function() {
    selectedSize = label.querySelector('input').id;
  });
});


btn[0].addEventListener('click', function(){
    image.src='images/Crochet Patterns For Your New Bags (34 Pics).jpeg';
    for(bt of btn){
        bt.classList.remove('active');
            }
            this.classList.add('active');


});

btn[1].addEventListener('click', function(){
    image.src='images/Crochet Patterns For Your New Bags (34 Pics).jpeg';
    for(bt of btn){
        bt.classList.remove('active');
            }
            this.classList.add('active');


});

btn[2].addEventListener('click', function(){
    image.src='images/Granny Square Tote Bag · Hopelessly Devoted Crochet.jpeg';
    for(bt of btn){
        bt.classList.remove('active');
            }
            this.classList.add('active');


});

//message after adding to cart

const submitButton = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');

submitButton.addEventListener('click', function() {
  // Add your logic to add the product to the cart here
  // ...

  // Display the success message
  successMessage.style.display = 'block';

  // Hide the success message after 4 seconds
  setTimeout(function() {
    successMessage.style.display = 'none';
  }, 4000);
});

