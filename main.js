let vitorias = 200;
let derrotas = 90;
let saldoVitorias = vitorias - derrotas;
let nivel = " ";

if (saldoVitorias <= 10) {
    nivel = "Ferro"
} else if (saldoVitorias > 10 && saldoVitorias <= 20){
    nivel = "Bronze"
} else if (saldoVitorias > 20 && saldoVitorias <= 50){
    nivel = "Prata"
} else if (saldoVitorias > 50 && saldoVitorias <= 80){
    nivel = "Ouro"
} else if (saldoVitorias > 80 && saldoVitorias <= 90){
    nivel = "Diamante"
} else if (saldoVitorias > 90 && saldoVitorias <= 100){
    nivel = "Lendário"
} else if (saldoVitorias >= 101){
    nivel = "Imortal"
} else {
    console.log("O nivel desse herói é desconhecido")
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
