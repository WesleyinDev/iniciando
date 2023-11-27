// Praticando o que já aprendi

function aplicar(pessoas) {
    let familia = ['William','Camille', 'Olindina', 'Wellington', 'Maria Ruth', 'Wesley'];
    let membro1 = 'William';
    let membro2 = 'Camille';
    let membro3 = 'Olindina';
    let membro4 = 'Del';
    let membro5 = 'Maria Ruth';
    let membro6 = 'Wesley, O gostoso ';
    let esquisito = ' É muito esquisito';
    let esquisito2 = ' É muito esquisita';
    let bonito = 'Muito bonito';
    let bonito2 = 'Muito bonita';
    let meio = esquisito + ' mas ' + bonito + ' também (pra não deixar ninguem triste)';
    let meio2 = esquisito2 + ' mas ' + bonito2 + ' também (pra não deixar ninguem triste)';
    let inexistente = 'Este membro não faz parte da familia'
    let tente = 'Tente um novo nome, porfavor.'
    let isso = 'Ela é esquisita mesmo, tem nem o que dizer'
    let sem = " sem solução"
    let wel = 'Ésse é o mais gostoso, '
    let wel2 = 'O mais delicia, '
    let wel3 = 'O unico perfeito da familia. '
    let ex = 'Elizabeth'
    let doen = ' Essa dai é doente mané, maluca da cabeça'
    let ex2 = 'Samara'

    if (familia.length > 5) {
        console.log('Essa família é meio grandinha em!!');
    } else {
        console.log('Sem graça. O bom é família gigante');
    }

    if (familia[0] === 'William') {
        console.log('O ' + membro1 + ' é o homem mais macho da família (rs)');
    } else {
        console.log(inexistente);
    }

    if (familia[0] === 'William') {
        console.log('O ' + membro1 + meio); 
    }else {
        console.log(tente);
    }
    
    if (familia[1] === 'Camille') {
        console.log('A ' + membro2 + ' É a irmã do meio, todo esquisita e se acha bonita')
    }else {
        console.log(inexistente);
    }

    if (familia[1] === 'Camille') {
        console.log('A dona ' + membro2 + meio2);
    }else {
        console.log(tente);
    }

    if (familia[2] === 'Olindina') {
        console.log('A ' + membro3 + ' é a manda chuva do barato');
        console.log('Ela costuma a mandar em tudo. ' + ' A ' + membro3 + ' não aceita não como resposta')
    }else {
        console.log(inexistente);
    }
    
    if (familia[2] === 'Olindina') {
        console.log('Nada de contrariar a ' + membro3  + ' entendeu? ' + isso);
    }else {
        console.log(tente);
    }
    if (familia[3] === 'Wellington'){
    console.log('Viiish, ' + membro4 + " é o cachaceiro do bonde!!!")
    console.log('O homem enche a cara até cair duro no bar');
    }else {
        console.log(inexistente);
    }
    if (familia[3] === 'Wellington') {
        console.log('Nem esquenta, o ' + membro4 + sem);
    }else {
        console.log(tente);
    }
    if (familia[4] === 'Maria Ruth') {
        console.log('A ' + membro5 + ' é a esposa do mais bonito da familia' );
        console.log('Essa é a função dela');
    }else {
        console.log(inexistente)
    }
    if (familia[4] === 'Maria Ruth') {
        console.log('Ela também é a mescla de ' + esquisito2 + ' e ' + bonito2)
        console.log('É isso, a ' + membro5 + ' é ' + meio2);
    }else {
        console.log(tente)
    }
    if (familia[5] === 'Wesley') {
        console.log('Chegamos ao ' + membro6 + wel + wel2 + wel3)
    }else {
        console.log(inexistente)
    }
    if(familia[5] === 'Wesley') {
        console.log(pessoas)
    }else {
        console.log(tente)
    }
    familia.push(ex) 
    if (familia[6] === 'Elizabeth') {
        console.log('E temos a amiga, da ' + membro5 + ' a ' + ex)
    }else {
        console.log(inexistente)
    }
    if(familia[6] === 'Elizabeth') {
        console.log('A ' + ex + 'É a ex do ' + wel4 + doen)
    }else {
        console.log(tente)
    }
    familia.push(ex2)
    if(familia[7] === 'Samara') {
        console.log('E temos também a ' + ex2 + ', Que também é ex do ' + wel4 )
        console.log('Mas abafe o caso')
    }else {
        console.log('ERROR')
    }
}

let wel4 = 'O MAIS PERFEITO APENAS'
aplicar(wel4);