
let boxes = [ 4, 6, 12, 20 ];
let boxesUsed = [];

function isPossible(n)
{
  while (n > 6)
  {
    n = n - 4;
  }
  
  if (n == 6 || n == 4)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function getBoxes(n)
{
    boxesUsed = [];
    while ((n - 20) >= 4 || n == 20)
    {
        n -= 20;
        boxesUsed.push(20);
    }
    while ((n - 12) >= 4 || n == 12)
    {
        n -= 12;
        boxesUsed.push(12);
    }
    while ((n - 6) >= 4 || n == 6)
    {
        n -= 6;
        boxesUsed.push(6);
    }
    while ((n - 4) >= 4 || n == 4)
    {
        n -= 4;
        boxesUsed.push(4);
    }
    return boxesUsed
}


let n = 270;

if (isPossible(n))
{
    console.log(getBoxes(n));
    console.log("true", getBoxes(n).length, " boxes");

}
else
{
    console.log("false");
}