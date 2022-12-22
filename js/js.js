const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

canvas.onmousedown = function draw(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    var color = document.querySelector('.color-input').value;
    var wdth = document.querySelector(".width-input").value;

    ctx.beginPath();
    ctx.moveTo(x, y);

    ctx.strokeStyle = color;
    ctx.lineWidth = wdth;

    canvas.onmousemove = e => {
        var x = e.offsetX;
        var y = e.offsetY;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

canvas.onmouseup = () => {
    canvas.onmousemove = () => {
        return
    }
};

document.querySelector(".preference-clear").onclick = () => {
    ctx.clearRect(0, 0, width, height);
}

document.querySelector('.preference-save').onclick = () => {
    document.querySelector(".saved-canvas img").src = canvas.toDataURL();
    // toDataURL() - метод кнаваса, который превращает рисунок на канвасе в юрл адресс
}