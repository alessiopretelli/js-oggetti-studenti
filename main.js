function letturaStudenti(alunni) {
    for (i = 0; i < alunni.length; i++) {
        console.log(alunni[i].nome + ' ' + alunni[i].cognome);
    }    
}

function nuovoStudente(a) {
    /*
    a[a.length] = {};
    a[a.length - 1]['nome'] = prompt("Inserisci il tuo nome.");
    a[a.length - 1]['cognome'] = prompt("Inserisci il tuo cognome.");
    a[a.length - 1]['eta'] = prompt("Inserisci la tua eta'.") * 1;
    */
    //alternativa
    a.push({
        ['nome'] : prompt("Inserisci il tuo nome."), 
        ['cognome'] : prompt("Inserisci il tuo cognome."), 
        ['eta'] : prompt("Inserisci la tua eta'.") * 1
    });

    return a;
}

var studente = {
    'nome': 'Alessio',
    'cognome': 'Pretelli',
    'eta': 24
};

for (var key in studente) {
    console.log(key + ': ' + studente[key]);
}

var studenti = [
    {
        'nome': 'Alessio',
        'cognome': 'Pretelli',
        'eta': 24
    },
    {
        'nome': 'Genoveffo',
        'cognome': 'Bracciacorte',
        'eta': 58
    },
    {
        'nome': 'Sauro',
        'cognome': 'Dino',
        'eta': '25000000~'
    },
];

letturaStudenti(studenti);

studenti = nuovoStudente(studenti);

letturaStudenti(studenti);
console.log(studenti);