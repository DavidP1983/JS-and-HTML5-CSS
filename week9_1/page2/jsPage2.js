var myVar;
  function myFunction(){
    myVar = setTimeout(showPage,3000);
  }
  function showPage(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("myMain").style.display = "block";
    document.getElementById("rat-ing").style.display = "block";
  }

  $(document).ready(function(){

    $("form#ratingForm").change(function(event){
      event.preventDefault();
      if($("#ratingForm :radio:checked")){
        $(".text").fadeIn(1500).css("display","block");
        $("#button").fadeIn(1500).css("display","block");
        $("h1").fadeIn(1500).css("display","block");
        $("#arme").fadeIn(1500).css("display","block");
        $("#hide").fadeIn(1500).css("display","block");
      }
      $("#tex").html("Your feedback: " + $('input:radio[name=rating]:checked').val() + " /5 ");
    });
    var $modal = $("#myModal");
    var $modal2 = $("#Modal");
    // var $remove = $(".close3");

    $("#commit").on({
      click: function(){
        var textVal = $("#rate").val();
        if(textVal==null || textVal==""){
          alert("PLease enter your comment \nRate the stars");
        }else{
          var d = new Date();
          var $rate =$(".rating > input:checked ~ label");
          var $form = $("label:not(.rating > input:checked ~ label)");
          // console.log($rate);
          // console.log($form);
          var $text="";
          for(var i=0; i<$rate.length; i++){
            $text+="★";
          }
          // console.log($text);
          var title = $(".rating > input:checked ~ label").attr("title");
          var $el = $("<div id=''><section id='s' style='opacity:0;'><li><i class='fas fa-user-circle' style='font-size:48px;color:red'></i><p id='one'>"+d.toDateString()+"</p></li><p id='star'>"+$text+' - '+"<b>"+title +"</b></p></section><br><br></div>");
          $("h1").after($el);
          var $id = $($el).attr("id",`${title}`);
          console.log($id);
          var comment = $("#rate").val();
          var $el2 = $("<div id=''><section id='s2' style='opacity:0;'><p id='two'>"+comment+"</p></section></div>");
          $el.after($el2);
          var $id2 = $($el2).attr("id",`${title}`);
          var $el3 = $("<button id='' class='spin circle'>Delete</button>");
          $el2.after($el3);
          var $id3 = $($el3).attr("id",`${title}`);
          $("#s").delay(1000).animate({opacity:'2'}, 5000);
          $("#s2").delay(1100).animate({opacity:'2'}, 5000);
          $modal.css("display","block");
          $("#rate").val("");
          var starUncheck = document.getElementsByTagName("form")[0];
          for(var i=0;i<starUncheck.length;i++){
            starUncheck[i].checked = false;
          }
          $("#tex").html("Your feedback: " + " 0 /5 ");
          var  $findSpanElements = $id3;
          // console.log($findSpanElements);
          $findSpanElements.click(function(){
            $modal2.css("display","block");
            $(".close3").click(function(){
              $modal2.css("display","none");
              $id.hide(900).delay(900).fadeOut(1600);
              $id2.hide(1000).delay(1000).fadeOut(1700);
              // $id3.hide(600).delay(1000).fadeOut(1700);
              $id3.removeClass('spin circle');
              var $round = $id3.addClass('done');
              var button = $id3.html('&#9989;');
              $round.delay(500).fadeOut(3500);
            });

          });
        }
      }
    });

    $("#reset").click(function(){
      $("#rate").val("");
      var starUncheck = document.getElementsByTagName("form")[0];
      for(var i=0;i<starUncheck.length;i++){
        starUncheck[i].checked = false;
      }
      $("#tex").html("Your feedback: " + " 0 /5 ");
    });
    $(".close").click(function(){
      $modal.css("display","none");
    });
    $(".close2").click(function(){
      $modal2.css("display","none");
    });

    $(".slide").click(function(){
     $(".box-inner").css("display","block");
     $(".box2").animate({width:"toggle"
     });
       });

  });

  function generateRandomColor()
  {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;

  }

  function Print(){
    var parent = document.getElementsByTagName("li")[0];
    var firstEl = parent.firstElementChild;
    firstEl.style.color =  generateRandomColor();
  }

  var modal = document.getElementById("myModal");
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

