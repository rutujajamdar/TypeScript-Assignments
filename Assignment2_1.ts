
function Maximum(Arr : number[]) : number
{
    let Max : number = Arr[0];

    for(let Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt];
        }
    }

    return Max;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

var Ret : number = 0;

Ret = Maximum(Arr)

console.log("Maximum Number from Array is : "+ Ret)
