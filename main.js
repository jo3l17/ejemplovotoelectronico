var candidates = document.querySelectorAll('.candidate_card');
var message = "";
var alertMessage = document.getElementById('alert_message');
const cleanSelection = () => {
    candidates.forEach(element => {
        element.classList.remove('selected')
    });
}
candidates.forEach(element => {
    element.addEventListener('click', () => {
        cleanSelection();
        element.classList.add('selected')
    });
});
const vote = () => {
    var flag = false;
    var message = '';
    var classtoAdd = 'alert-';
    alertMessage.classList.remove('alert-success','alert-danger');
    candidates.forEach(element => {
        if (element.classList.contains('selected'))
            flag = true;
    })
    if (flag == true) {
        classtoAdd += 'success';
        message = 'Gracias por tu voto';
    } else {
        classtoAdd += 'danger';
        message = 'Por favor selecciona una opcion';
    }
    showMessage(message);
    alertMessage.classList.add(classtoAdd);
    alertMessage.classList.remove('d-none');
    cleanSelection();
    document.getElementById('main_nav').scrollIntoView();
}
const showMessage = (message) => {
    document.getElementById('message').innerHTML = message;
}
const hideAlert = () => {
    alertMessage.classList.add('d-none');
}