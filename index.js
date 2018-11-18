let result = [];
for (element of document.querySelectorAll('.main button')) {
    element.addEventListener('click', function() {
        result.push(this.innerHTML)
    });
}
document.getElementById('ravno').addEventListener('click', function() {
    if (result[1] == '+') {
        alert(parseInt(result[0]) + parseInt(result[2]))
    } else if (result[1] == '-') {
        alert(parseInt(result[0]) - parseInt(result[2]))
    }
})