

init();
var n = 1 ;
var timerId=setTimer();

function setTimer(){
    return setInterval(()=>{
        let $buttons = $('.buttons > button');
        slideOut(n);
        n = standNum(n + 1);
        slideIn(n);
        activeButton($buttons.eq(n-1));
      },3000);
}

function standNum(number){
    let size = $('.images > img').length;
    if(number > size ){number = 1;}
    return number;
}

function slideIn(num){
    $(`.images>img:nth-child(${num})`).removeClass('wait').addClass('current')
}

function slideOut(num){
    $(`.images>img:nth-child(${num})`).removeClass('current').addClass('leave')
    .one('transitionend',(e)=>{console.log(e);$(e.currentTarget).removeClass('leave').addClass('wait')});
}

function init(){
    $('.images>img:nth-child(1)').addClass('current');
    let size = $('.images > img').length;
    for(let i = 2;i <= size;i++){
        $(`.images > img:nth-child(${i})`).addClass('wait');
    }
    let $buttons = $('.buttons > button');
    activeButton($buttons.eq(0));
    for (let i = 0; i < size; i++) {
      $($buttons[i]).on('click',function(e){
         var index = $(e.currentTarget).index();
         window.clearInterval(timerId);
         n = index + 1;
         $(`.images>img:nth-child(${n})`).addClass('current')
         .siblings('.current').removeClass('current').addClass('wait');
         timerId = setTimer();
         activeButton($buttons.eq(index))
     })    
    }
}

function activeButton($node){
    $node.addClass('active')
    .siblings('.active').removeClass('active')
}
