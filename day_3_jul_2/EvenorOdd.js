

let n = parseInt(prompt("Enter valid a number"));

if (isNaN(n))
{
    document.writeln("Insert valid integer")
    
}

else if (n%2 === 0)
{
document.writeln("Even Number")
}
else {
document.writeln("Odd Number");
}