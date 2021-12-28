M.AutoInit();

// Selectの初期化
$(document).ready(function(){
  $('select').formSelect();
});

// FormのSubmit無効
window.onload = function(){
  document.onkeypress = enterForbidden;

  function enterForbidden(){
      if(window.event.keyCode == 13){
          return false;
      }
  }
}