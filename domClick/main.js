var flag = 0;
$('#clickMe').on('click', function() {
    console.log("dd")
  if(flag === 0){
  $('#popover').show()
  setTimeout(function() {
    $(document).one('click', function() {
      $('#popover').hide()
      flag = 0;
    })
  }, 0)
  flag = 1;}
  else{
    $('#popover').hide();
    flag = 0;
  }

})

$('#wrapper').on('click',function(e){
  e.stopPropagation();
})