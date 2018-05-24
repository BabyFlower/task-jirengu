!function() {


     /*a frag hover show the bottom line*/
     var lis = Array.from(topNavBar.querySelectorAll('li'));
     lis.forEach(li => li.onmouseenter = function(event){
          var target = event.target;
          target.classList.remove('leave');
          target.classList.add('active');
     })
     lis.forEach(li => li.onmouseleave = function(event){
         var target = event.target;
          target.classList.remove('active');
          target.classList.add('leave');

     })


     /*show second menu*/
     var secondMenus = Array.from(topNavBar.querySelectorAll('.secondMenu'));
     secondMenus.forEach(secondMenu => secondMenu.addEventListener('animationend',function(e){
      if (e.animationName!=='menuLeave') {return;}
      e.path[1].classList.remove('leave');
     })) //when display is block, the animation can be effort, so using js to let display be none when animation is end
}.call()