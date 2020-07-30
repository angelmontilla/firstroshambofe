import { ClassMove } from './class-move';

export class ClassRepoMove {
    private aMoves: ClassMove[];

    constructor() {
        this.aMoves = new Array<ClassMove>();
    }

    /**
     * @description Add element at Repository
     *
     * @param {ClassMove} r
     * @memberof ClassRepoMove
     */
    addResult(r: ClassMove): void {
        this.aMoves.unshift(r);
    }

    /**
     * @description for iterate
     *
     * @readonly
     * @type {ClassMove[]}
     * @memberof ClassRepoMove
     */
    get listMoves(): ClassMove[] {
        return this.aMoves;
    }

    /**
     * @description remove all array entrances
     *
     * @param {boolean} confirm
     * @memberof ClassRepoMove
     */
    remove(confirm: boolean) {
        if (confirm) {
            this.aMoves = new Array<ClassMove>();
        }
    }

    /**
     * @description only for testing
     *
     * @memberof ClassRepoMove
     */
    write() {
        console.log('======== WRITING SCORES =======');
        this.aMoves.forEach(element => {
            console.log(`first: ${element.first} second: ${element.second} result ${element.result}`);
        });
    }
}
