function divert() {
    window.location.href = "getstarted.html"
  }
  $(document).ready(function(){
  
    $.ajax({
      type: 'post',
      url: 'count.php',
      data: {
        updateTotalViews: "pageViews" 
      },
  
      success: function(response) {
        $('#display_div_pageViews').html(response);
  
      }
    });
    $.ajax({
      type: 'post',
      url: 'count.php',
      data: {
        readTotalUsers: "usersCount" 
      },
  
      success: function(response) {
        $('#display_div_usersCount').html(response);
  
      }
    });
  });  


  $(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
});


