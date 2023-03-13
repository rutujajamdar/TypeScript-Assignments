
function Maximum(Arr : number[]) : number
{
    let firstMax : number = Arr[0];
    let secondMax : number = Arr[0];

    for(let Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(Arr[Cnt] > firstMax)
        {
            secondMax = firstMax;
            firstMax = Arr[Cnt];    
        }
        else if(Arr[Cnt] > secondMax)
        {
            secondMax = Arr[Cnt];
        }
    }

    return secondMax;
}

var Arr : number[] = [23,89,6,29,56,45,27,32];

var Ret : number = 0;

Ret = Maximum(Arr)

console.log("Second Maximum Number is : "+ Ret)
