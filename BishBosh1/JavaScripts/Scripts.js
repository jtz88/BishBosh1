﻿for (let i = 0; i <= 100; i++)
{
    if (i % 3 == 0 && i % 4 == 0) {
        console.log("Bish-Bosh");
    }
    else if (i % 3 == 0) {
        console.log("Bish");
    }
    else if (i % 4 == 0) {
        console.log("Bosh");
    }
    else {
        console.log(i);
    }
}