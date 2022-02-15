function pomodoro(){
  const tempoPomodoro = Number(prompt('Qual o tempo do seu pomodoro?'))
  
  let quantidade_pomodoro = Number(prompt('Quantos pomodoros'))

  let resultado
  mult()
  function mult(){
    resultado = tempoPomodoro * quantidade_pomodoro;
    resultado = resultado / 60;
    alert('Restam ' + `${resultado}`+ ' Horas')
    novaoperacao()
  }
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
pomodoro()
calc_pomodoro()
novaoperacao()

//cada 3 pomodoros é equivalente a 1 hora e 30 minutos
//faça um programa que diga em horas e minutos a quant
//idade de pomodoros que o usuário colocar.
