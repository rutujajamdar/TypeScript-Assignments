
function ChkArmStrong(No : number) : boolean
{
    let CountDigit : number = 0;
    let temp : number  = No;
    let SumDigit : number = 0;
    while(No!=0)
    {
        CountDigit++;
        No = Math.floor(No / 10);
    }

    No = temp;

    while(No!=0)
    {
        SumDigit = SumDigit + ((No%10)**CountDigit);
        No = Math.floor(No / 10);
    }

    if(SumDigit == temp)
    {
        return true;
    }
    return false;
}

var bRet : boolean = ChkArmStrong(407);

if(bRet == true)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not a Armstrong number");
}