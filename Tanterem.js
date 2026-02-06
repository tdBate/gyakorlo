export class Tanterem {
    constructor(epulet, sorszam, osztaly) {
        this.epulet = epulet;
        this.sorszam = sorszam;
        this.osztaly = osztaly;
    }

    toString() {
        return this.epulet+" - "+this.osztaly+" - "+this.osztaly;
    }
}