export default class TooltipManager {
    constructor() {
        this.closeTooltipFuncs = new Map();
    }

    initialize(id, closeTooltipFunc) {
        this.closeTooltipFuncs.set(id, closeTooltipFunc);
    }

    clear(exceptId) {
        let keys = [...this.closeTooltipFuncs.keys()];
        let skip = exceptId || -1;

        while(keys.length > 0) {
            let id = keys.pop();

            if (id != skip)
            {
                let func = this.closeTooltipFuncs.get(id);

                func();
                this.closeTooltipFuncs.delete(id);
            }
        }
    }

    remove(tooltipId) {
        this.closeTooltipFuncs.delete(tooltipId);
    }
}