function changeColor(color) {
    const red = document.getElementById('red-light');
    const yellow = document.getElementById('yellow-light');
    const green = document.getElementById('green-light');

    red.className = 'light';
    yellow.className = 'light';
    green.className = 'light';

    
    if (color === 'red') {
        red.className = 'light red';
    } else if (color === 'yellow') {
        yellow.className = 'light yellow';
    } else if (color === 'green') {
        green.className = 'light green';
    }
}
