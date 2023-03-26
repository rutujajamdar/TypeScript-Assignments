
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

var cobj1 = new Circle(10.8);
console.log("Area of Circle is : "+cobj1.CalculateArea());

var cobj2 = new Circle(14.2);
console.log("Area of Circle is : "+cobj2.CalculateArea());