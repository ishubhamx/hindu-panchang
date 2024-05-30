"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corr2 = exports.corr = void 0;
class corr {
    constructor(mlcor, mscor, fcor, dcor, lcor) {
        this.mlcor = mlcor;
        this.mscor = mscor;
        this.fcor = fcor;
        this.dcor = dcor;
        this.lcor = lcor;
    }
}
exports.corr = corr;
class corr2 {
    constructor(l, ml, ms, f, d) {
        this.l = l;
        this.ml = ml;
        this.ms = ms;
        this.f = f;
        this.d = d;
    }
}
exports.corr2 = corr2;
