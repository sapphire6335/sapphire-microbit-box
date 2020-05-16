enum numOption {
    //% block="四捨五入"
    round,
    //% block="允許小數"
    float
}

/**
 * 自訂的積木
 */
//% weight=100 color=#faca0c icon="\uf0ad" block="面積"
namespace areaCalculator {
    //% blockId="areaOfRectangle" block="取得三角形面積:底: %base|高: %height|選項:%myOpt"
    //% base.min=0 base.max=100 base.defl=0 height.min=0 height.max=100 height.defl=0
    //% weight=100
    export function areaOfTriangle(base: number, height: number, myOpt: numOption): number {
        if (myOpt == numOption.float)
            return base * height / 2;
        else
            return Math.round(base * height / 2);
    }

    //% blockId="showAreaOfRectangle" 
    //% block="LED顯示三角形面積:底: %base|高: %height|選項:%myOpt"
    //% weight=80
    export function showAreaOfTriangle(base: number, height: number, myOpt: numOption): void {
        let myNum = 0;
        if (myOpt == numOption.float)
            myNum = base * height / 2;
        else
            myNum = Math.round(base * height / 2);
        basic.showNumber(myNum);
    }
}