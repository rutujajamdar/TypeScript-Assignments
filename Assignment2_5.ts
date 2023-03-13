
function ChkString(str : string) : boolean
{
    let stringArr : string[] = str.split(" ");
    let flag : boolean = false;
    
    for(let Cnt = 0 ; Cnt <stringArr.length; Cnt++)
    {
        if(stringArr[Cnt] == "Marvellous")
        {
            flag = true;
            break;
        }
    }

    return flag;
}
var str = "Pune Kothrud  Marvellous Infosystems"

if(ChkString(str))
{
    console.log("String contains marvellous in it");
}
else
{
    console.log("String does not contains marvellous in it");
}