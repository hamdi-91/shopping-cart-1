const croix=document.querySelectorAll('.fa-times');
const hearts=document.querySelectorAll('.fa-heart');
const BtnPlus=document.querySelectorAll('.fa-plus-circle'); 
const BtnMinus=document.querySelectorAll('.fa-minus-circle');
const sum=document.querySelector('.somme');

hearts.forEach(heart=> {
    heart.addEventListener('click',function(){
        heart.classList.toggle('red-hearts')
    })
})

// for (let i=0 ;i< hearts.length;i++){
//     hearts[i].addEventListener('click',function(){
//         hearts[i].classList.toggle('red-hearts')
//     })
// }

//  croix.forEach(btnCroix=>{
//     btnCroix.addEventListener('click',function(){
//         btnCroix.parentElement.parentElement.remove()
//      })
//  })
 for(let i=0 ; i<croix.length;i++){
     croix[i].addEventListener('click',function(){
       
         sum.innerHTML=parseFloat(sum.innerHTML) - (parseFloat(croix[i].parentElement.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.nombre').innerHTML * parseFloat(croix[i].parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.prix').innerHTML)))+'$'
      croix[i].parentElement.parentElement.remove()
        })
 }

//  BtnPlus.forEach(plus=>{
//      plus.addEventListener('click',function(){
//          plus.nextElementSibling.innerHTML++
//      })
//  })

 for(let i=0;i<BtnPlus.length;i++){
     BtnPlus[i].addEventListener('click',function(){
         BtnPlus[i].nextElementSibling.innerHTML++
         sum.innerHTML=(parseFloat(sum.innerHTML)+parseFloat(BtnPlus[i].parentElement.nextElementSibling.querySelector('.prix').innerHTML))+'$'

     })
 }

 for (let i of BtnMinus){
    i.addEventListener('click',function(){
    if(i.previousElementSibling.innerHTML > 0)
    i.previousElementSibling.innerHTML--
sum.innerHTML=(parseFloat(sum.innerHTML)-parseFloat(i.parentElement.nextElementSibling.querySelector('.prix').innerHTML)) + '$'

    })
}
//