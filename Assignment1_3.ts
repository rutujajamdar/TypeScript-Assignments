import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function DisplayFactors(No : number) : void
{
    for(let iCnt = 1;iCnt<=(No/2);iCnt++)
    {
        if(No % iCnt == 0)
        {
            console.log(iCnt)
        }
    }
}

var Value : number = parseInt(prompt("Enter Number : "))

DisplayFactors(Value)

