var candidates = document.querySelectorAll('.candidate_card');
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