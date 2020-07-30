import { Enummove } from '../enums/enummove.enum';
import { Enumresult } from '../enums/enumresult.enum';

/**
 * @description class for store one movement
 *
 * @export
 * @class ClassMove
 */
export class ClassMove {
    private firstMove: Enummove;
    private secondMove: Enummove;
    private theResult: Enumresult;

    /**
     * @description Constructor
     * @param firstM - first player move
     * @param secondM - second player move
     * @param theResultM - result of move
     */
    constructor(private firstM: Enummove, private secondM: Enummove, private theResultM: Enumresult) {
        if (firstM === null || firstM === undefined) {
            this.firstMove = Enummove.UNKNOW;
        } else {
            this.firstMove = firstM;
        }
        if (secondM === null || secondM === undefined) {
            this.secondMove = Enummove.UNKNOW;
        } else {
            this.secondMove = secondM;
        }
        if (theResultM === null || theResultM === undefined) {
            this.theResult = Enumresult.UNKNOWED;
        } else {
            this.theResult = theResultM;
        }
    }

    /**
     * @description get first move
     *
     * @type {Enummove}
     * @memberof ClassMove
     */
    get first(): Enummove {
        return this.firstMove;
    }

    /**
     * @description set first move
     *
     * @memberof ClassMove
     */
    set first(value: Enummove) {
        this.firstMove = value;
    }

    /**
     * @description get second move
     *
     * @type {Enummove}
     * @memberof ClassMove
     */
    get second(): Enummove {
        return this.secondMove;
    }

    /**
     * @description set second move
     *
     * @memberof ClassMove
     */
    set second(value: Enummove) {
        this.secondMove = value;
    }

    /**
     * @description get result of game
     *
     * @type {Enumresult}
     * @memberof ClassMove
     */
    get result(): Enumresult {
        return this.theResult;
    }

    /**
     * @description set result of game
     *
     * @memberof ClassMove
     */
    set result(value: Enumresult) {
        this.theResult = value;
    }
}
