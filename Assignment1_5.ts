import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function Fibonacci(No : number) : void
{
    var No1 : number = 0
    var No2 : number = 1
    var No3 : number = 0

    for(let iCnt = 2;iCnt<=No;iCnt++)
    {
        if(No2 > No)
        {
            break
        }
        console.log(No2)
        No3 = No1 + No2
        No1 = No2
        No2 = No3
    }

}

var Value : number = parseInt(prompt("Enter Number : "))

Fibonacci(Value)