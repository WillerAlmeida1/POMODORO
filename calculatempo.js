//Pega os dados do usuario
function pomodoro(){
  const tempoPomodoro = Number(prompt('Qual o tempo do seu pomodoro?'))

  let quantidade_pomodoro = Number(prompt('Quantos pomodoros'))

  let resultado
  mult()

  //Multiplica os dados inseridos pelo usuario
  function mult(){
    resultado = tempoPomodoro * quantidade_pomodoro;
    resultado = resultado / 60;
    alert('Restam ' + `${resultado}`+ ' Horas')
    novaoperacao()
  }
  //Para refazer ou finalizar de fato código
  function novaoperacao(){
    let opcao = prompt('Você deseja reutilizar o Pomo-Tempo? \n 1 - Sim \n 2 - Não')

    if(opcao == 1){
      pomodoro()
    } else if (opcao == 2){
      alert('Obrigador por utilizar o Pomo-Tempo!!!')
    } else {
      alert('Digite algo válido.')
      novaoperacao()
    };
  };
};

//(opcao == 1 ? pomodoro() : '' )
pomodoro()
calc_pomodoro()
novaoperacao()

//cada 3 pomodoros é equivalente a 1 hora e 30 minutos
//faça um programa que diga em horas e minutos a quant
//idade de pomodoros que o usuário colocar.
/*
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  setInterval(function(){
    
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds; 

    if(--timer < 0){
      timer = duration;
    }
  }, 1000);
};

window.onload = function() {
  var duration = 60 * 5; // conversão para segundos
  var display = document.querySelector('#timer') // elemente para show the timer

  startTimer(duration, display); //Inicia a função
}*/

