
// Sélection de tous les éléments qui vont comporter une animation
const allStuff = document.querySelectorAll('.animation');

// Sélection de la musique
const music = new Audio('./public/assets/autre/oiseaux.mp3');

// Déclaration des regex
const regLetters = new RegExp('^[a-zA-ZÀ-ÿ]{2,}$');
const regMail = new RegExp('([_A-Za-z0-9-]+)(\.[_A-Za-z0-9-]+)@([A-Za-z0-9]+)(\.[A-Za-z0-9]+)');

// Sélection des inputs
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const site = document.getElementById('site');
const personsNumber = document.getElementById('personsNumber');

// Sélection des div où vont apparaître le message d'erreur
const errorMessage = document.querySelectorAll('.errorMessage');
const lastnameNone = document.querySelector('.lastnameNone');
const lastnameWarning = document.querySelector('.lastnameWarning');
const firstnameNone = document.querySelector('.firstnameNone');
const firstnameWarning = document.querySelector('.firstnameWarning');
const emailNone = document.querySelector('.emailNone');
const emailWarning = document.querySelector('.emailWarning');
const siteNone = document.querySelector('.siteNone');
const personsNone = document.querySelector('.personsNone');
const alert = document.querySelector('.alert');

// Sélection du formulaire et de la vidéo
const form = document.forms['formContact'];
const video = document.querySelector('video');
const number = document.getElementById('number');

console.log();


// Fonction d'animation sur les éléments de la page
const scrollDisplayAnimation = (event) => {

    allStuff.forEach(element => {

        const {scrollTop, clientHeight} = document.documentElement;
        // scrollTop est la hauteur déjà scroll sur le document
        // clientHeight est la hauteur de l'écran de l'utilisateur

        // Cette méthode permet de déterminer le positionnement dans la page
        const top = element.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + top) - clientHeight) {

            if (!element.classList.contains('icones')) {
                element.classList.add('action');
            } else {
                element.classList.add('iconesAction');
            }
        }
    });
}

// Fonction pour vérifier le support et ajuster la vidéo en conséquence
// const videoCheck = () => {

//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
//     if (!isMobile) {
//         video.src = './public/assets/autre/oiseaux2.mp4';
//     } else {
//         video.src = './public/assets/autre/oiseaux.mp4';
//     }
// }



// Déclaration des évènements
// window.addEventListener('load', videoCheck);


window.addEventListener('load', () => {
    music.play();
    music.volume = 0.5;
    music.loop = true;
});


window.addEventListener('scroll', scrollDisplayAnimation);

personsNumber.addEventListener('input', () => {
    number.textContent = personsNumber.value;
});


const lastnameValidation = () => {

    if (lastname.value == '') {
        lastnameNone.classList.remove('hide');
        lastnameWarning.classList.add('hide');
        lastname.classList.add('invalid');
    } else if (!regLetters.test(lastname.value)) {
        lastnameWarning.classList.remove('hide');
        lastnameNone.classList.add('hide');
        lastname.classList.add('invalid');
    } else {
        lastnameWarning.classList.add('hide');
        lastnameNone.classList.add('hide');
        lastname.classList.remove('invalid');
    }
}

const firstnameValidation = () => {

    if (firstname.value == '') {
        firstnameNone.classList.remove('hide');
        firstnameWarning.classList.add('hide');
        firstname.classList.add('invalid');
    } else if (!regLetters.test(firstname.value)) {
        firstnameWarning.classList.remove('hide');
        firstnameNone.classList.add('hide');
        firstname.classList.add('invalid');
    } else {
        firstnameWarning.classList.add('hide');
        firstnameNone.classList.add('hide');
        firstname.classList.remove('invalid');
    }
}

const emailValidation = () => {

    if (email.value == '') {
        emailNone.classList.remove('hide');
        emailWarning.classList.add('hide');
        email.classList.add('invalid');
    } else if (!regMail.test(email.value)) {
        emailWarning.classList.remove('hide');
        emailNone.classList.add('hide');
        email.classList.add('invalid');
    } else {
        emailWarning.classList.add('hide');
        emailNone.classList.add('hide');
        email.classList.remove('invalid');
    }
}

const siteValidation = () => {

    console.log(site.value);

    if (site.value == '') {
        siteNone.classList.remove('hide');
        site.classList.add('invalid');

        // marche pas
    } else if (site.value < 1 || site.value > 7) {
        siteNone.classList.remove('hide');
        site.classList.add('invalid');

    } else {
        siteNone.classList.add('hide');
        site.classList.remove('invalid');
    }
}

const personsValidation = () => {

    if (personsNumber.value == 0) {
        personsNone.classList.remove('hide');
    } else {
        personsNone.classList.add('hide');
    }
}

// const formSend = (event) => {
//     if (!errorMessage.textContent == '') {
//         event.preventDefault();
//     } else {
//         form.submit();
//     }
// }

console.log(errorMessage.textContent);
lastname.addEventListener('blur', lastnameValidation);
firstname.addEventListener('blur', firstnameValidation);
email.addEventListener('blur', emailValidation);
site.addEventListener('blur', siteValidation);
personsNumber.addEventListener('blur', personsValidation);
// form.addEventListener('submit', formSend);



// Pour bien saisir le fonctionnement du scroll
/* const scrollDisplayAnimation = (event) => {

    allStuff.forEach(element => {
    // On déclare la variable qui contient deux propriétés (c'est un objet)
    const {scrollTop, clientHeight} = document.documentElement;
    // scrollTop est la hauteur déjà scroll sur le document
    // clientHeight est la hauteur de l'écran de l'utilisateur
    console.log(scrollTop, clientHeight);

    // Cette méthode permet de déterminer le positionnement dans la page
    console.log(element.getBoundingClientRect());

    const top = element.getBoundingClientRect().top;

    // Si ce que j'ai scrollé depuis le haut du document devient supérieur à ce que j'ai scrollé depuis le haut du document + la hauteur de mon élément
    // et le haut de la partie visible, alors j'active l'animation. On ajoute '- clientHeight * 0.55' pour faire démarrer l'animation plus tôt par exemple.
    // toFixed() permet de retirer les chiffres après la virgule.
    if (scrollTop > (scrollTop + top).toFixed() - clientHeight * 0.60) {
        element.classList.add('action');
    }
    });
} */





