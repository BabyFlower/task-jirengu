 /*slice scroll , highlight the <a> tags , animation*/
    window.onscroll = function(x){
        if (window.scrollY>0) {topNavBar.classList.add('active');
      }else{
        topNavBar.classList.remove('active');
      }  //this part control nav bar when window scroll

        var currentPart = currentPart(aTags);
        
  
        if (currentPart!==undefined) {
            var lis = topNavBar.querySelectorAll('li.highlight');
            lis.forEach(li => li.classList.remove("highlight"));

            var liCurrent = topNavBar.querySelector('a[href="#'+currentPart+'"]').parentNode; 
            liCurrent.classList.add("highlight");

            var offsets = document.querySelectorAll('.offsetInit');
            offsets.forEach(offset => offset.classList.add("offset"));
            var part = document.getElementById(currentPart);
            part.classList.remove('offset');  

        }

      function currentPart(aTags){  
        var currentPart;
        for (let i = 0; i < aTags.length-4; i++) {
          var nextPart = document.querySelector(aTags[i].getAttribute('href'));
          if (window.scrollY>nextPart.offsetTop-150) {
            currentPart=nextPart.id
          }
        }
        return currentPart;
       }
     }