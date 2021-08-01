
function perc(){

    let perc = [];
    for (let index = 1; index < 11; index++) {
        perc.push(index); 
    }

    return perc;
}

function formulate(dna){
    
    dna = dna.toUpperCase();
    return dna;
}

function validate(body){
var seq = body;
var valid_dna = 'ACDEFGHIKLMNPQRSTVWY '
if (seq.length < 9) return 0

for (let index = 0; index < seq.length; index++) {
    if (valid_dna.includes(seq[index])) continue;
    else return 0; 
    
}
return 1;
}



export {perc,validate,formulate};