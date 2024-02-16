
export default class GeradorSenha {

    static rand(min, max) {
        return Math.floor(Math.random() *(max-min)+min);
    }

    static geraNumero() {
        return this.rand(0,9); //String.fromCharCode(rand(48,58));
    }

    static geraMaiuscula() {
        
        return String.fromCharCode(GeradorSenha.rand(65,91));
    }

    static geraMinuscula() {
        return String.fromCharCode(GeradorSenha.rand(97, 123));
    }

    static geraSimbolo() {
        const simbolos = '@#$%&()[];^*+-_{}=.,';
        return simbolos.split('')[GeradorSenha.rand(0,simbolos.length-1)];
    }

    geraSenha(n,num,mai,min,sim) {
        n = Number(n);
        let i = 0;
        let senha = [];
        while (i<n) {
            mai && senha.push(GeradorSenha.geraMaiuscula()); // curto-circuito - if true, executa
            min && senha.push(GeradorSenha.geraMinuscula());
            num && senha.push(GeradorSenha.geraNumero());
            sim && senha.push(GeradorSenha.geraSimbolo());

            i++;
        }
        return senha.join('').slice(0,n);
    }
}