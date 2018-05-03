var $buttons = $('.buttons > button');
var size = $buttons.length;
var n = 0;
for (let i = 0; i < size; i++) {
    $($buttons[i]).on('click',function(e){
        var index = $(e.currentTarget).index();
        var p = index * (-480);
        $('.images').css({
            transform:'translateX(' + p + 'px)'
        })
        n = index;
        activeButton($buttons.eq(n))
    })    
}



$buttons.eq(n%size).trigger('click');
var timerId = setTimer();

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId);
})

$('.window').on('mouseleave',function(){
    timerId = setTimer();
})

function setTimer(){
    return setInterval(() =>{
        $buttons.eq(n%size).trigger('click');
        n +=1;
    },3000)
}

function activeButton($node){
    $node.addClass('active')
    .siblings('.active').removeClass('active')
}