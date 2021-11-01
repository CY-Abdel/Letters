const target = document.getElementById('target');

let array = ['simple', 'beautiful', 'clear', 'amazing'];

// INDEX DU MOT DS LE TABL
let wordIndex = 0;
// INDEX DE LA LETTRE DANS LE MOT
let letterIndex = 0;


const createLetter = () => {
    // ON CREE UN SPAN LETTER QUI SERA L'ENFANT DE TARGET
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.classList.add('letter');
    letter.style.opacity = "0";
    letter.style.animation = 'anim 5s ease forwards';

    letter.textContent = array[wordIndex][letterIndex];

    // pour ne pa avoir 5000 letters sur le dom on efface chaque lettre apres 2 sec
    setTimeout(() => {
        letter.remove();
    }, 2000);
}

// createLetter();


// ON UTILISTE setTimeout car elle s'auto appelle juste une fois
// ON PEUT UTILISER setInterval mais c'est  + COMPLIQUE A STOPPER
const loop = () => {
    setTimeout(() => {
        // POUR QUE LES MOTS AFFICHE EN BOUCLE ON DOIT AJOUT UNE CONDITIO?
        // SI WORDINDEX EST EGLAE AU DERNORE MOT DU ARRAY ON LE REMET A ZERO ET ON LANCE LA BOUCLE
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
            // da?S LE CAS CONTRAIRE ON EXECUTE NOTRE BOUCLE
        } else if (letterIndex < array[wordIndex].length) {
            // ON CREE UNE LETTRE SI L'INDEX EST < A LA LENGTH DU MOT DU TAB
            createLetter();
            letterIndex++;
            // ICI ON RAPPELLE LE setTimeout AVEC LA FUNT loop()
            loop();
        } else {
            // DANS LE CAS OU ON A FINI D'AFFICHER LE MOT ON PASSE AU MOT SUIVANT ET ON REMET L'INDEX DE LETTER A ZERO
            letterIndex = 0;
            wordIndex++;
            // ELLE AFFICHE LES MOTS DU TAB A LA FOIS 
                // loop();

            // DONC ON REGLE LE SOUCIS AVEC UN setTimeout
            setTimeout(() => {
                loop();
            }, 2000);
        }
    }, 80);
}

loop()