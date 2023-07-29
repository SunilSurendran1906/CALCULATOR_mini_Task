let outPutScreen = document.getElementById("output-value");

function display(num) {
  outPutScreen.value += num;
}

function calculate(params) {
  try {
    outPutScreen.value = eval(outPutScreen.value);
  } catch (error) {
    alert("Invaild");
  }
}

function clearScreen() {
  outPutScreen.value = "";
}

function del(params) {
  outPutScreen.value = outPutScreen.value.slice(0, -1);
}
