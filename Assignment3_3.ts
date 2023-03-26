
class Circle
{
    Radius : number;
    PI : number;

    constructor(No1 : number)
    {
        this.Radius = No1;
        this.PI = 3.14
    }

    CalculateArea() : number
    {
        return this.PI*this.Radius**2;
    }
}


class CircleX extends Circle
{
    constructor(No1 : number)
    {
        super(No1);
    }

    CalculateCircumference(): number {
        return 2 * this.PI * this.Radius;
    }
}

var cobj1 = new CircleX(10.8);
console.log("Area of Circle is : "+cobj1.CalculateArea());
console.log("Circumference of Circle is : "+cobj1.CalculateCircumference());

var cobj2 = new CircleX(14.2);
console.log("Area of Circle is : "+cobj2.CalculateArea());
console.log("Circumference of Circle is : "+cobj2.CalculateCircumference());