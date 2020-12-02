var today = new Date();
    var year = today.getFullYear();
    var footer = document.getElementById("footer");
    var para = document.createElement("p");
    var node = document.createTextNode("Copyright@"+year);
    para.appendChild(node);
    footer.appendChild(para);
    footer.style.color = "white";

    $(document).ready(function(){

      var msg = '<div class=\"header\"><a id=\"close\" href="#" title="close"><i class="fa">&#xf00d;</i></a></div>';
      msg+='<div><h1></h1>';
      msg+='<br>Please take a few minutes to fill out our Reservation Request,<br><br>';
      msg+="it won't take lot's of your time</div>";

      var elNote=document.createElement('div');
      elNote.setAttribute('id','note');
      elNote.innerHTML=msg;
      document.body.appendChild(elNote);
      var childEl = document.getElementsByTagName('h1')[2];

      var greeting;
      var time = new Date().getHours();
      if(time<10){
        greeting="Good Morning";
      }else if(time<18){
        greeting="Good Afternoon";
      }else{
        greeting="Good Evening";
      }
      childEl.textContent=greeting;

      function dismissNote(){
        document.body.removeChild(elNote);
        $('#date').focus();
      }

      var closeBar = document.getElementById('close');
      closeBar.addEventListener('click',dismissNote,false);



      $("#menu").click(function(){
        $(this).toggleClass("change");
      });

      $("#button").click(function(){
        $("#myDropdown").toggleClass("show");
        $("#myInput").focus();
      });

      $(".slide").hover(function(){
        $("a.slidedown").html('Forms <i class="fa fa-caret-up"></i>');
      },function(){
        $("a.slidedown").html('Forms <i class="fa fa-caret-down"></i>')
      });

      $(document).on("click",function(e){
        if(!e.target.matches('.dropbtn')){
          var $drop = $('.dropdown-content');
          var i;
          for(i=0;i<$drop.length;i++){
            var $open = $drop[i];
            if($open.classList.contains('show')){
              $open.classList.remove('show');
              $('#menu').toggleClass('change');
              $("#myInput").val("");
            }
          }
        }
      });

      $(".tablinks ").hover(function(){
        $("div.tabContact").slideDown(500);
      },function(){
        $("div.tabContact").slideUp(500);
      });

      //-----------------------------RANGE START----------------------------//
      $('#plus').click(function(){
        var newValuePlus = parseInt($('#age').val()) + 1;
        if(newValuePlus > 18) return;
        $('#age').val(newValuePlus);
      });
      $('#minus').click(function(){
        var newValueMinus = parseInt($('#age').val()) - 1;
        if(newValueMinus < 0) return;
        $('#age').val(newValueMinus);
      });
      //-----------------------------RANGE END--------------------------------//

      $('#room').on("change",function(){
        var standardEl=$(this).val();
        if(standardEl=='business'){
          $('#standard').change().attr('src','images/business.jpg');
          $('.dropimg-content img').change().attr('src','images/business.jpg');
          $('.desc').text('Business');
        }else{
          $('#standard').attr('src','images/standart.jpg');
          $('.dropimg-content img').change().attr('src','images/standart.jpg');
          $('.desc').text('Standard');
        }
        if(standardEl=='suite'){
          $('#standard').change().attr('src','images/suite.jpg');
          $('.dropimg-content img').change().attr('src','images/suite.jpg');
          $('.desc').text('Suite');
        }
      });
      $('#subject').on("keyup",function(){
        var textEntered = $(this).val();
        document.getElementById("subject").className="capitalize";
        var $charDisplay = $('#charactersLeft');
        var $counter = (0 +(textEntered.length));
        $charDisplay.text($counter + ' / ' + ' 180 ');

        $charDisplay.css({
          'color':'Gray'
        });
      });

      $("#review").on('click',function(){

        $("#review").toggleClass("drop");
        if($("#review").attr("class")!=="drop"){
          $("#pre_reading").slideUp(300);
        }else{
          $("#pre_reading").slideDown(300);
        }
      });
      //--------------------SCROLL START----------------------------------------//
      // the element of wich we want to scroll
      var $elem = $('#scroll');
      // show the buttons
      $('#nav_up').fadeIn('slow');
      $('#nav_down').fadeIn('slow');

      // whenever we scroll fade out both buttons
      $(window).bind("scrollstart", function(){
        $("#nav_up,#nav_down").stop().animate({'opacity': '0.2'});
      });
      //...and whenever we stop scrolling fade in both buttons
      $(window).bind("scrollend", function(){
        $("#nav_up,#nav_down").stop().animate({'opacity': '1'});
      });
      // clicking the "down" botton will make the page scroll to the $elem's height
      $('#nav_down').click(function(e){
        $('html,body').animate({scrollTop:$elem.height()}, 800);
      });
      $('#nav_up').click(function(e){
        $('html,body').animate({scrollTop:'0px'},800);
      });
      //--------------------SCROLL End----------------------------------------//

      //------------------------Fill out order liste--------------------------//
      // var day,month,year;
      // $("#date").change(function(){
      //   var text = $(this).attr("name");
      // var date = $("#date").val().split("-");
      // day = date[2];
      // month = date[1];
      // year = date[0];
      // var fullDate = ([day,month,year].join('-'));
      //   var $option = $('<option value="" >'+ text +":"+" "+fullDate+'</option>');
      //   var order = $("#order").append($option);
      // });
      $("#info input").change(function(){
        var text = $(this).attr("name");
        var night = $(this).val();
        var $option = $('<option value="" >'+ text +":"+" "+night+'</option>');
        var order = $("#order").append($option);
      });
      $("#info select").change(function(){
        var text = $(this).attr("name");
        var selectOptions = [];
        selectOptions = $(this).val();
        var $option = $('<option value="" >'+ text +":"+" "+selectOptions+'</option>');
        var order = $("#order").append($option);
      });
      $("#plus,#minus").change(function(){
        var text = $("#age").attr("name");
        var input=$("#age").val();
        var $option = $('<option value="" >'+ text +":"+" "+input+'</option>');
        var order = $("#order").append($option);
      });
      $("#subject").change(function(){
        var text = $(this).attr("name");
        var comment = $(this).val();
        // console.log(comment);
        var $option = $('<option value="" >'+ text +":"+" "+comment+'</option>');
        var order = $("#order").append($option);
      });
      //---------------------------End Fill out order list------------------//


      //-------------------------------Submit Start-------------------------//
      var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      var telPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

      $("#info").submit(function(event){
        var isVailid=true;
        var arrivalDate = $("#date").val().trim();
        var date1=new Date(arrivalDate);
        var date2='2020-11-27';
        date2=new Date(date2);

        if(arrivalDate==""){
          $("#date").next().text("This field is required.");
          var $x = ('Arrival date:This field is required.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);;
          var $order = $("#order").append($option1);
          isVailid=false;
        }else if(date1<date2){
          $("#date").next().text("Error date.");
          var $x = ('Arrival date:Error date.');
          var $option1 = $('<option style="opacity:1;">'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else{
          $("#date").next().text("");
        }
        var x= $("#date").val(arrivalDate);

        var nights = $("#night").val().trim();
        if(nights==""){
          $("#night").next().text("This field is required.");
          var $x = ('Night:This field is required.');
          var $option1 = $('<option style="opacity:1;">'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else if(isNaN($("#night").val())){
          $("#night").next().text("This field must be numeric.");
          var $x = ('Night:This field must be numeric.');
          var $option1 = $('<option style="opacity:1;">'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else{
          $("#night").next().text("");
        }
        $("#night").val(nights);

        var name = $("#name").val().trim();
        if(name==""){
          $("#name").text().next("This field is required.");
          var $x = ('Name:This field is required.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else{
          $("#name").next().text("");
        }
        $("#name").val(name);

        var email = $("#email").val().trim();
        if(email==""){
          $("#email").next().text("This field is required.");
          var $x = ('Email:This field is required.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else if(!emailPattern.test(email)){
          $("#email").next().text("Must be a valid email address.");
          var $x = ('Email:Must be a valid email address.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else{
          $("#email").next().text("");
        }
        $("#email").val(email);

        var phone = $("#phone").val().trim();
        if(phone==""){
          $("#phone").next().text("This field is required.");
          var $x = ('Phone:This field is required.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else if(!telPattern.test(phone)){
          $("#phone").next().text("Must be a valid phone number.");
          var $x = ('Phone:Must be a valid phone number.');
          var $option1 = $('<option>'+$x+'</option>').css("color","red").fadeIn(1500).fadeOut(1500);
          var $order = $("#order").append($option1);
          isVailid=false;
        }else{
          $("#phone").next().text("");
        }
        $("#phone").val(phone);


        var check = document.getElementById("agree").checked;
        var input = document.getElementById("submit");
        if(check==false){
          isVailid=false;
          input.style.backgroundColor = "red";
          $("#submit").text("");
        }

        if(isVailid==false){
          event.preventDefault();
        }


      });
      $("#reset").on("click",function(){
        $("#order option").remove();
        $("#submit").css("backgroundColor","blue");
      });

      $("#mf").on("click",function(){
        $("div.arrow_up").toggleClass('arrow_down');
        $("#info1").toggleClass("form2");
        $("#email_1").focus();
        // $("#info1").slideToggle(500);
      });

      $(":radio").change(function(){
        var radioButton = $(":radio:checked").val();
        if(radioButton=="corporate"){
          $("#company_name").attr("disabled",false);
          $("#company_name").next().text("*");
        }else{
          $("#company_name").attr("disabled",true);
          $("#company_name").next().text("");
        }
      });

      $("#info1").submit(function(event){
        var isValid=true;
        var email1 = $("#email_1").val().trim();
        if(email1==""){
          $("#email_1").next().text("This field is required");
          isValid=false;
        }else if(!emailPattern.test(email1)){
          $("#email_1").next().text("Must be valid email address.");
          isValid=false;
        }else{
          $("#email_1").next().text("");
        }
        $("#email_1").val(email1);
        var password = $("#password").val().trim();
        if(password.length < 6){
          $("#password").next().text("Must be 6 or more characters.");
          isValid=false;
        }else{
          $("#password").next().text("");
        }
        $("#password").val(password);
        var verify = $("#verify").val().trim();
        if(password !==verify){
          $("#verify").next().text("This entry must equal first entry.");
          isValid=false;
        }else{
          $("#verify").next().text("");
        }
        $("#verify").val(verify);
        if(!$("#company_name").attr("disabled")){
          var companyName = $("#company_name").val().trim();
          if(companyName==""){
            $("#company_name").next().text("This field is required.");
            isValid=false;
          }else{
            $("#company_name").next().text("");
          }
          $("#company_name").val(companyName);
        }
        var fn = $("#fn").val().trim();
        var ln = $("#ln").val().trim();
        if(fn==""||ln==""){
          alert("Please enter Your First or \n Last Name");
          isValid=false;
        }
        $("#fn").val(fn);
        $("#ln").val(ln);
        var pn = $("#pn").val().trim();
        if(pn==""){
          $("#pn").next().text("This field is required.");
          isValid=false;
        }else{
          $("#pn").next().text("");
        }
        $("#pn").val(pn);


        if(isValid==false){
          event.preventDefault();
        }
      });
      $("input").blur(function(){
        var color = $("#email_1").val().trim();

        if(!emailPattern.test(color)){
          $("div .icon:first").css("background","dodgerblue");
        }else{
          $("div .icon:first").css("background","green");
        }
        var password = $("#password").val().trim();
        if(password.length < 6){
          $("div .icon:eq(1)").css("background","dodgerblue");
        }else{
          $("div .icon:eq(1)").css("background","green");
        }
        var verify = $("#verify").val().trim();
        if(verify!== password){
          $("div .icon:eq(2)").css("background","dodgerblue");
        }else{
          $("div .icon:eq(2)").css("background","green");
        }
        var companyName = $("#company_name").val().trim();
        if(companyName==""){
          $("div .icon:eq(3)").css("background","dodgerblue");
        }else{
          $("div .icon:eq(3)").css("background","green");
        }
        if($("#company_name").attr("disabled")){
          $("div .icon:eq(3)").css("background","dodgerblue");
          $("#company_name").val("");

        }
        var fn = $("#fn").val().trim();
        var ln = $("#ln").val().trim();
        if(fn=="" || ln==""){
          $("div .icon:eq(4)").css("background","dodgerblue");
          $("div .icon:eq(5)").css("background","dodgerblue");
        }else{
          $("div .icon:eq(4)").css("background","green");
          $("div .icon:eq(5)").css("background","green");
        }
        var pn = $("#pn").val().trim();
        if(!telPattern.test(pn)){
          $(".icon:last").css("background","dodgerblue");
        }else{
          $(".icon:last").css("background","green");
        }
      });
      $("#chat").on({
        mouseover:function(){
          $(".arrow_hide").css("display","block");
        },
        mouseout:function(){
          $(".arrow_hide").css("display","none");
        }
      });
      $("#s").on("click",function(event){
        if(this.hash !==""){
          event.preventDefault();
          var hash = this.hash;
          $('html,body').animate({
            scrollTop: $(hash).offset().top
          },900,function(){
            window.location.hash = hash;
            $("#section1 p").fadeOut(3000).css("background","red").css("border-radius","14px").css("font-size","24px");
        });
        }
      });
      $(window).scroll(function(){
        if($(document).scrollTop() > 760){
          $("#footer").fadeIn(1500).css("display","block");
        }else{
            $("#footer").fadeOut(300);
        }
      });
      $("#TZ").click(function(){
        $(".time").css("display","block");
      });

      $(".animsition").animsition({
   inClass: 'flip-in-y',
   outClass: 'flip-out-y',
   inDuration: 2500,
   outDuration: 800,
   linkElement: '.animsition-link',
   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
   loading: true,
   loadingParentElement: 'body', //animsition wrapper element
   loadingClass: 'animsition-loading',
   loadingInner: '', // e.g '<img src="loading.svg" />'
   timeout: false,
   timeoutCountdown: 5000,
   onLoadEvent: true,
   browser: [ 'animation-duration', '-webkit-animation-duration'],
   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
   overlay : false,
   overlayClass : 'animsition-overlay-slide',
   overlayParentElement : 'body',
   transition: function(url){ window.location.href = url; }
 });

    });

    function change(){
      var checkBox = document.getElementById("agree");
      var color = document.getElementById("submit");
      if(checkBox.checked==true){
        color.style.backgroundColor = "green";
      }else{
        color.style.backgroundColor = "blue";
      }
    }
    var check = document.getElementById("agree");
    check.addEventListener("click",change,false);


    //----------------Submit--End-------------------------------------------//


    function filterFunction(){
      var input,filter,a,ul,li,i;
      input = document.getElementById("myInput").value;
      filter = input.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for(i=0;i<a.length;i++){
        txtValue = a[i].textContent || a[i].innerText;
        console.log(txtValue);
        if(txtValue.toUpperCase().indexOf(filter) > -1){
          a[i].style.display = "";
        }else{
          a[i].style.display = "none";
        }
      }
    }
    //--------------Canvas-start---------------------------------------------//
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0,"blue");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
    //--------------Canvas-end-----------------------------------------------//

    //---------------Scroll Indicator-Start----------------------------------//
    window.onscroll = function() {myFunction()};

    function myFunction(){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll/height)*100;
      document.getElementById('myBar').style.width = scrolled + "%";
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("chat").style.left = "0";
      } else {
        document.getElementById("chat").style.left = "-300px";
      }
    }

    //-------------Scroll Indicator-End--------------------------------------//

    //-------------jquery-scrollstartstop Plugin---------//
    $(function() {

      $(document).on('scrollstart', function() {
        // console.log('scroll started')
      })

      $(document).on('scrollend', function() {
        // console.log('scroll ended')
      })

    });
    (function() {

      var lastScrollAt = Date.now()
      , timeout

      function scrollStartStop() {
        var $this = $(this)

        if (Date.now() - lastScrollAt > 100)
        $this.trigger('scrollstart')

        lastScrollAt = Date.now()

        clearTimeout(timeout)

        timeout = setTimeout(function() {
          if (Date.now() - lastScrollAt > 99)
          $this.trigger('scrollend')
        }, 100)
      }

      $(document).on('scroll', scrollStartStop)

    })()
    //----------------jquery-scrollstartstop----//

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("chat");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function(){
      modal.style.display = "block";
    }
    span.onclick = function(){
      modal.style.display = "none";
    }
    window.onclick = function(event){
      if(event.target==modal){
        modal.style.display = "none";
      }
    }

var myTime = setInterval(myTimer,1000);
function myTimer(){
  var d = new Date();
  document.getElementById("txt").innerHTML = d.toLocaleTimeString();
  var elcontent = document.getElementById("txt");
  var elementContent = document.createElement("h3");
  var textContent = document.createTextNode("Montreal");
  elementContent.appendChild(textContent);
  elcontent.appendChild(elementContent);
}