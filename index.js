import readline from "readline/promises";
import { beolvas } from "./beolvas.js";

import fs from "node:fs";

async function F01(params) {
    let magassagok = [];
    const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });
    while (true) {
        const valasz = await r1.question("Add meg a magasságodat: ")
        if (!valasz) break;
        magassagok.push(parseInt(valasz));
    }

    magassagok.sort((a, b) => { a - b });
    console.log(magassagok.join(" - "));
    fs.writeFileSync("magassagok.txt", magassagok.join("\n"));
    r1.close();
}

async function F02() {
    const adatok = await beolvas("petrik-termek.csv");
    adatok.forEach(element => {
        console.log(element.toString())
    });
}



await F01();
await F02();