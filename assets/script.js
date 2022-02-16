function startTimer(duracao, display) {
  var timer = duracao, horas, minutos, segundos;

  function usarioColocaTempo(){
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var n3 = null;
    let resultado
    mult()

    //Faz o relogio rodar 00:00:00
    setInterval(function(){
      horas = parseInt(timer / 60);
      minutos = parseInt(timer / 60, 10);
      segundos = parseInt(timer % 60, 10);

      horas = horas < 10 ? '0' + horas : horas;
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;

      display.textContent = horas + ':' + minutos + ':' + segundos;

      if(--timer < 0){
        timer = duracao;
      }

    }, 1000);
  };

  window.onload = function(){
    var duracao = 60 * 5;
    var display = document.querySelector('#timer')

    startTimer(duracao, display)
  }

};


