let heart = document.querySelector('.details__icon-bg-heart')
let mouse = document.querySelector('.details__icon-bg-mouse')
let lamp = document.querySelector('.details__icon-bg-lamp')
let textHeart = document.querySelector('.description__heart')
let textMouse = document.querySelector('.description__mouse')
let textLamp = document.querySelector('.description__lamp')

heart.onclick = function(){
     let off1 = mouse.classList.remove('details__icon-bg-active');
     let off2 = lamp.classList.remove('details__icon-bg-active');
     let off3 = textMouse.classList.remove('details__description-active')
     let off4 = textLamp.classList.remove('details__description-active')
   if(this.classList.contains('details__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('details__icon-bg-active');
      off1; off2; off3; off4;
      textHeart.classList.add('details__description-active');
   }
}

mouse.onclick = function(){
     let off1 = heart.classList.remove('details__icon-bg-active');
     let off2 = lamp.classList.remove('details__icon-bg-active');
     let off3 = textHeart.classList.remove('details__description-active');
     let off4 = textLamp.classList.remove('details__description-active');
   if(this.classList.contains('details__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('details__icon-bg-active');
      off1; off2; off3; off4;
      textMouse.classList.add('details__description-active');
   }
}
lamp.onclick = function(){
     let off1 = mouse.classList.remove('details__icon-bg-active');
     let off2 = heart.classList.remove('details__icon-bg-active');
     let off3 = textHeart.classList.remove('details__description-active');
     let off4 = textMouse.classList.remove('details__description-active');

   if(this.classList.contains('details__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('details__icon-bg-active');
      off1; off2; off3; off4;
      textLamp.classList.add('details__description-active');
   }
}