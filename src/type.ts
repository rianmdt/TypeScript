function dizOla(name: string): string {
    try {
        return `Olá ${name}! O resultado da multiplicação é:`;
    }
    catch (error) {
        console.error('Ocorreu um erro na saudação, desculpe', error);
        return '';
    }
}


function fazMultiplicacao(valorA: number, ValorB: number): number {
    try {
        return valorA * ValorB;
    }
    catch (error) {
        console.error('Ocorreu um erro na solução da conta', error);
        return 0;
    }
}


console.log(dizOla('Gian'));
console.log(fazMultiplicacao(25, 30));