function getTotal(arr)
{
    let total = 0;
    for (let c1 of arr)
    {
        if ((c1 % 2) != 0)
        {
            total += c1;
        }
    }
    return total;
}

function getTime(n)
{
    let time = 0

    while (n > 5)
    {
        n = n / 2;
        time = time + 1;
    }

    time = time + 0.5;

    return (time);
}

function displayTime(n)
{
    console.log(`Sammy took ${Math.floor(n)} minutes and ${(n - Math.floor(n)) * 60} seconds to eat the chips!`);
}

let chips = [13, 3, 88, 76, 56, 34, 16, 85, 42, 90, 78]

displayTime(getTime(getTotal(chips)));