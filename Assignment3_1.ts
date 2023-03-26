
class Arithmatic
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    Substraction() : number
    {
        return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    Division() : number
    {
        return this.Number1 / this.Number2;
    }
}

var aobj1 = new Arithmatic(30,15);

console.log("Addition of aobj1 : "+aobj1.Addition());
console.log("Substraction of aobj1 : "+aobj1.Substraction());
console.log("Multiplication of aobj1 : "+aobj1.Multiplication());
console.log("Division of aobj1 : "+aobj1.Division());

var aobj2 = new Arithmatic(45,10);

console.log("Addition of aobj2 : "+aobj2.Addition());
console.log("Substraction of aobj2 : "+aobj2.Substraction());
console.log("Multiplication of aobj2 : "+aobj2.Multiplication());
console.log("Division of aobj2 : "+aobj2.Division());