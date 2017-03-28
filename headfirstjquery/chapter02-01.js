/**
 * Created by thejojo on 2017/3/25.
 */


$(document).ready(function () {
   $(".guess_box").click(function () {
       var discount = Math.floor((Math.random()*5) + 5);
       var discount_mes = "<p>Your discount is " + discount + "%.</p>";
       // alert(discount_mes);
       $(this).append(discount_mes);
       $(".guess_box").each(function () {
          $(this).unbind();
       });

   });

});