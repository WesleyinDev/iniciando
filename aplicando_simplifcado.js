function aplicar(pessoas) {
    let familia = ['William', 'Camille', 'Olindina', 'Wellington', 'Maria Ruth', 'Wesley'];

    let dados = {
        'William': {
            descricao: 'homem mais macho da família (rs)',
            caracteristicas: 'É muito esquisito mas Muito bonito também (pra não deixar ninguém triste)'
        },
        'Camille': {
            descricao: 'irmã do meio, todo esquisita e se acha bonita',
            caracteristicas: 'É muito esquisita mas Muito bonita também (pra não deixar ninguém triste)'
        },
        'Olindina': {
            descricao: 'manda chuva do barato',
            caracteristicas: 'Nada de contrariar a Olindina entendeu? Ela é esquisita mesmo, tem nem o que dizer'
        },
        'Wellington': {
            descricao: 'cachaceiro do bonde!!!',
            caracteristicas: 'Nem esquenta, o Wellington sem solução'
        },
        'Maria Ruth': {
            descricao: 'esposa do mais bonito da família',
            caracteristicas: 'Ela também é a mescla de É muito esquisita e Muito bonita'
        },
        'Wesley': {
            descricao: 'mais gostoso, O mais delícia, O unico perfeito da familia.',
            caracteristicas: pessoas ? pessoas : 'Tente um novo nome, porfavor.'
        }
    };

    familia.forEach((membro) => {
        if (dados['wesley']) {
            console.log(`A ${membro} é ${dados[membro].descricao}`);
            console.log(`Características: ${dados[membro].caracteristicas}`);
        } else {
            console.log(`Este membro "${membro}" não faz parte da família`);
            console.log('Tente um novo nome, por favor.');
        }
    });
}

let wel4 = 'O MAIS PERFEITO APENAS'
aplicar(wel4);
