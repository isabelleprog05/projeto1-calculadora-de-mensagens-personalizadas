const nome = "Isabelle"
let idade = 35
let cidade = "Recife"
let profissao = "Médica"
let anoatual = 2025

let salario = 24500
let bonus = 2340
let totalAno = salario + bonus

alert(`
     ========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento:${anoatual - idade}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${totalAno}
Total ano: U$${totalAno * 12}
Total anual (salário dobrado): U$${totalAno * 12 *2}
=========================================
    `)