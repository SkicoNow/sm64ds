const angleInput = document.querySelector("#angle");
// const numberOfResults = document.querySelector("#numberOfResults");
const BHeld = document.querySelector("#BHeld");
const printButton = document.querySelector("#printButton");
const clearButton = document.querySelector("#clearButton");
const angleList = document.querySelector("#angleList");
printButton.addEventListener("click", printResults);
clearButton.addEventListener("click", clearResults);

function printResults()
{
    let angle = parseInt(angleInput.value);
    let numberOfResults = parseInt(document.querySelector("#numberOfResults").value);
    for (let i = 0; i < numberOfResults; i++)
    {
        if (BHeld.checked)
        {
            angle += 40960;
        }
        else
        {
            angle += 38912;
        }
        if (angle > 65535)
        {
            angle %= 65536;
        }
        const newResult = document.createElement("li");
        const newResultNode = document.createTextNode(angle);
        newResult.appendChild(newResultNode);
        angleList.appendChild(newResult);
        if (angleList.children[i].innerText == angleInput.value)
        {
            angleList.children[i].style.fontWeight = "bold";
        }
    }
}

function clearResults()
{
    for (let i = angleList.children.length - 1; i >= 0; i--)
    {
        angleList.children[i].remove();
    }
}