document.getElementById("price-widget").innerHTML = '<div style="font-family: Helvetica, Arial; position: relative; cursor: default; overflow:hidden; background-color: #353536; width: 300px; height: 180px; line-height: 1; border-radius: 4px; margin: 0 auto "> <div> <div class="btc-box"> <div style="width:300px; height:auto; position: absolute; top: 15px; overflow: hidden;"> <table style="background:#353536;border: none; color: #CCC; font-size: 14px; display: inline-block; margin:0;width:270px; margin:0 15px;"> <tr> <td style="border: none;padding:10px 0;width:50%">GIÁ BITCOIN</td> <td id="curr" style="border: none;font-weight:bold; font-size:18px;color: #fbc205; text-align: right;"></td> </tr> <tr> <td style="border: none;padding:10px 0;">Giá bạn mua: </td> <td id="buy" style="border: none;font-weight:bold; font-size:25px;color: #FFF;text-align: right;">loading...</td> </tr> <tr> <td style="border: none;padding:10px 0;">Giá bạn bán: </td> <td id="sell" style="border: none;font-weight:bold; font-size:25px;color: #FFF;text-align: right;">loading...</td> </tr> <tr> <td style="border: none;padding:10px 0;"> </td> <td style="border: none;text-align: right;"><input type="button" value="Cập nhật" onclick="reloadpage()" style="line-height: 1.5; padding:3px 15px; color: #FFF;border: 1px solid #27ae60; background-color: #27ae60; border-radius: 20px;box-shadow: 0 1px 2px rgba(0,0,0,0.36);" /> </td> </tr> </table></div></div></div> </div>'

$.getJSON("https://hamirex.org/site/api-rate", function( dataprice ) {
  var buy=dataprice.sell;
  var sell=dataprice.buy;
  var curr="VND";
  document.getElementById("sell").innerHTML = sell;
  document.getElementById("buy").innerHTML = buy;
  document.getElementById("curr").innerHTML = curr;
});

function reloadpage() {
	  document.getElementById("sell").innerHTML = "-";
	  document.getElementById("buy").innerHTML = "-";
	  $.getJSON("https://hamirex.org/site/api-rate", function( dataprice ) {
	  var buy=dataprice.sell;
	  var sell=dataprice.buy;
	  var curr="VND";
	  document.getElementById("sell").innerHTML = sell;
	  document.getElementById("buy").innerHTML = buy;
	  document.getElementById("curr").innerHTML = curr;
	});
}
