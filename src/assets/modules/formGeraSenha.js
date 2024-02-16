import GeraSenha from './GeraSenha.js'; // webpack passar pelo index e chegar no GERA E VALIDAR CPF

const div = document.querySelector('.cpf-gerado');
const span = div.querySelector('.resultado');
const btn = document.querySelector('.btn');
    
function getValues() {
        let i1 = document.querySelectorAll('input');
        let values = [];
        values.push(i1[0].value);
        for (let i=1; i<i1.length; i++) {
            values.push(i1[i].checked);
        }
        return values;

};

function dameUmaSenha([a,b,c,d,e]) {
        const obj = new GeraSenha();
        return obj.geraSenha(a,b,c,d,e) || 'Nothing!';
    };
    //span.innerHTML = dameUmaSenha();

export default () => {btn.addEventListener('click', (e) => {
        const actual_values = getValues();
        span.innerHTML = dameUmaSenha(actual_values);
})};