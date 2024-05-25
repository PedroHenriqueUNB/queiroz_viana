function mudaTamanho() {
  //tamanho da janela
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  //resolução da tela
  var screenHeight = screen.height;
  var screenWidth = screen.width;
  if(windowWidth <= 768 && windowHeight <= 1024){
    // alert("MOBILE");
  }
  console.log("JANELA:" + windowWidth + 'x' + windowHeight + "\n");
  console.log("TELA:" + screenWidth  + 'x' + screenHeight+ "\n");
}
//1340x762 -> mediaQuery
//1181x762 -> redirection
mudaTamanho();
window.addEventListener('resize', function(){
  mudaTamanho();
});

//JANELA:982x768  QUEM SOMOS

