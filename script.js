
const Button = document.getElementById('button');

Button.onclick = () => {
    let val = document.getElementById('value').value;
    val = Number(val);
    console.log(val);
}
