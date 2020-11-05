function displayPlace(president) {
    var presPlace = president.getAttribute('data-president_num')
    alert(president.innerHTML + ' is the ' + presPlace + ' president of the United States!');
}