     /*a tags jump*/
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }

    requestAnimationFrame(animate);

    var aTags = document.querySelectorAll('#topNavBar > nav > ul > li >a');

    
    for (let i = 0; i < aTags.length-4; i++) {
      let part = document.querySelector(aTags[i].getAttribute('href'));
      part.classList.add('offsetInit');
    }

    aTags.forEach(aTag => aTag.onclick = function(e){
        e.preventDefault();
        var whichPart = document.querySelector(e.currentTarget.getAttribute('href'));
        whichPart.classList.add('offsetInit');
        whichPart.classList.add('offset');
        var targetY = whichPart.offsetTop - 80;
        var currentTargetY = window.scrollY;
        var t = Math.abs((targetY - currentTargetY)*3);
        if(t>500){ t = 500 }
        var coords = {y : currentTargetY};

         var tween = new TWEEN.Tween(coords) // 起始位置
         .to({ y: targetY}, t) // 结束位置 和 时间
         .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
         .onUpdate(function() {
         // coords.y 已经变了
         window.scrollTo(0,coords.y) // 如何更新界面
        })
        .start(); // 开始缓动
     
     })

 