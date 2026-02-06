import { Tanterem } from "./Tanterem.js";
import fs from "node:fs";
import chalk from "chalk";

export async function beolvas(fajlnev) {
    let lista = [];
    let text = "";
    try {
            text = fs.readFileSync(fajlnev).toString();
    } catch (error) {
        console.log(chalk.red("Nincs ilyen file"));
    }

    text.replaceAll("\r", "").split("\n").splice(1).forEach((element) => {
        if (element) {
            let adatok = element.split(";");
            let t1 = new Tanterem(adatok[0], parseInt(adatok[1]), adatok[2]);
            lista.push(t1);
        };
    })
    return lista;
}