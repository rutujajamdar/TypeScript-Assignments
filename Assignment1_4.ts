import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function ChkPrime(No : number) : boolean
{
    var flag : boolean = true
    for(let iCnt = 2;iCnt<=(No/2);iCnt++)
    {
        if(No % iCnt == 0)
        {
            flag = false
            break
        }
    }

    return flag
}

var Value : number = parseInt(prompt("Enter Number : "))

var Ret : boolean = ChkPrime(Value)

if(Ret)
{
    console.log(Value+ " is a prime number")
}
else
{
    console.log(Value+ " is not a prime number")
}


