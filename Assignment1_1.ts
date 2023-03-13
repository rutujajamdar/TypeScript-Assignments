function Maximum(No1 : number, No2 : number, No3 : number) : number
{
    var Ans : number = 0

    if(No1 > No2)
    {
        if(No1 > No3)
        {
           Ans = No1
        }
        else
        {
            Ans =  No3
        }
    }
    else
    {
        if(No2 > No3)
        {
            Ans =  No2
        }
        else
        {
            Ans =  No3
        }
    }

    return Ans
}

var Ret : number = 0

Ret = Maximum(230,89,600)

console.log("Maximum number is : "+Ret)