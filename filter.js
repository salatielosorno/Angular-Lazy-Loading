var emails = ["test.email+alex@kavak.com","test.e.mail+bob.cathy@kavak.com","testemail+david@ka.vak.com"];

var numUniqueEmails = function(emails) {
    var emailsValidos = [];

    emails.forEach(element => {
        let dominio = 1;
        let nombre = 0;
        let emailSplit = element.split('@');

        emailSplit[nombre] = emailSplit[nombre].toLowerCase();
        emailSplit[dominio] = emailSplit[dominio].toLowerCase();

        let emailcleaning = cleanPlus(emailSplit[nombre])
        emailcleaning = cleanName(emailcleaning)
        
        let emailvalidado = emailcleaning + emailSplit[dominio];
        emailsValidos.push(emailvalidado)

    });
    const eEnviados = emailsValidos.filter((value, index, element) => { return element.indexOf(value) === index })
    console.log('Enviados: ' + eEnviados.length)
};
function havePlus(emailNombre){
    return emailNombre.indexOf('+');
}
function havePoint(emailNombre) {
    return emailNombre.indexOf('.');
}
function cleanPoint(emailNombre, indice) {
    let longitud = emailNombre.length;
    let antesPunto, despuesPunto;
    antesPunto = emailNombre.slice(0, indice)
    despuesPunto = emailNombre.slice(indice+1, longitud)

    return antesPunto + despuesPunto;
}
function cleanName(emailNombre) {
    let indice = havePoint(emailNombre)
    while(indice > -1){
        emailNombre = cleanPoint(emailNombre, indice)
        indice = havePoint(emailNombre)
    }
    return emailNombre;
}
function cleanPlus(emailNombre){
    let indice = havePlus(emailNombre);
    return emailNombre.slice(0, indice);
}

numUniqueEmails(emails);