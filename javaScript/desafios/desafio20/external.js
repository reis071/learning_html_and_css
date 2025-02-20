let listaDeAlunos = [
    {nome: 'Joaquim', notas:[7,8,9,10]},
    {nome: 'Guilherme', notas:[6,8,3,10]},
    {nome: 'Bianca', notas:[7,2,9,0]},
    {nome: 'Rafael', notas:[2,8,3,10]},
]
const tabelaAlunos = document.getElementById('tabela')

for (let i = 0; i < listaDeAlunos.length; i++){
    let nomeAluno = listaDeAlunos[i].nome
    let media = listaDeAlunos[i].notas.reduce((a,b) => a + b) / listaDeAlunos[i].notas.length
    let situacao = ( media) >= 7 ? 'Aprovado' : 'Reprovado'
    tabelaAlunos.innerHTML += `<tr>
        <td>${nomeAluno}</td>
        <td>${media}</td>
        <td>${situacao}</td>
    </tr>`
}