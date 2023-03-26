import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function AreaOfCircle(No : number,PI : number = 3.14) : number
{
    var Ans : number = 0
    Ans = PI*No**2
    return Ans
}

var Radius : number = parseInt(prompt("Enter Radius of Circle : "))

var Ret : number = 0

Ret = AreaOfCircle(Radius)

console.log("Area of Circle is : "+ Ret)
