
function Summation(Arr : number[]) : number
{
    let Sum : number = 0;

    for(let Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum += Arr[Cnt];
    }

    return Sum;
}

var Arr : number[] = [23,6,7,4,5,7];

var Ret : number = 0;

Ret = Summation(Arr)

console.log("Summation is : "+ Ret)
