// var $buttons = $('.buttons > button');
// var size = $buttons.length;
// for (let i = 0; i < size; i++) {
//     $($buttons[i]).on('click',function(e){
//         var index = $(e.currentTarget).index();
//         var p = index * (-480);
//         $('.images').css({
//             transform:'translateX(' + p + 'px)'
//         })
//         activeButton($buttons.eq(index))
//     })    
// }



// $buttons.eq(0).trigger('click');

$('.images>img:nth-child(3)').addClass('wait').one('animationend',function(e){
    $(e.currentTarget).css({style:'z-index:1'})
})
$('.images>img:nth-child(1)').addClass('current').css({style:'z-index:2'});

var id= setInterval(()=>{
    $('.images>img:nth-child(2)').addClass('current').css({style:'z-index:3'});//会出现第三张图跳上来的bug
    $('.images>img:nth-child(1)').removeClass('current').addClass('wait');
    
    window.clearInterval(id);
},3000)


var id1=setInterval(()=>{
    $('.images>img:nth-child(3)').removeClass('wait').addClass('current');
    $('.images>img:nth-child(2)').removeClass('current').addClass('wait');
   
    window.clearInterval(id1);
},6000)


var id2=setInterval(()=>{
    $('.images>img:nth-child(1)').removeClass('wait').addClass('current');
    $('.images>img:nth-child(3)').removeClass('current').addClass('wait');
   
    window.clearInterval(id2);
},9000)