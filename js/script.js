const gridElem = document.querySelector(".grid");
for (let i = 1; i <=100; i++) {

    let result;
    let classColor;
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result = "FizzBuzz";
        classColor = "FBcolor";
    } else if (i % 5 === 0) {
        result = "Buzz";
        classColor = "Bcolor";
    } else if (i % 3 === 0) {
        result = "Fizz";
        classColor = "Fcolor";
    } else {
        result = i;
        classColor = "main-color";
    }

    console.log(result);
    gridElem.innerHTML += `<div class="box ${classColor}">${result}</div>`;
    const newBox = document.createElement("div");
    newBox.innerHTML = result ;
    newBox.classList.add("box");
    newBox.classList.add(classColor);

}