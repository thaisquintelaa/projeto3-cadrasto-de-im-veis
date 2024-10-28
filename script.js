//Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
alert('Bem vindo ao consultório! Esta é a fila de espera: ')
let queue = ['1°carlos','2°anitta','3°noah']
alert('1°carlos,2°anitta,3°noah,esta é a fila de espera')
alert('um novo paciente entou na fila,o nome dela é flor então ela será o último')
queue.push('4°flor')
alert(`${queue}`)
alert(`o primeiro paciente da fila de espera, o carlos foi consultado!`)