"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MhahPanchang = void 0;
const mhahCalculateFunc_1 = require("./mhahCalculateFunc");
const mhahLocalConstant_1 = require("./mhahLocalConstant");
const mhahPkgConstants_1 = require("./mhahPkgConstants");
const mhahSunMoonTimer_1 = require("./mhahSunMoonTimer");
const mhahCalendar_1 = require("./mhahCalendar");
class MhahPanchang {
    constructor() {
        this.mhahLocalConstant = new mhahLocalConstant_1.MhahLocalConstant();
        this.mhahPkgConstants = new mhahPkgConstants_1.MhahPkgConstants();
        this.mhahCalculateFunc = new mhahCalculateFunc_1.MhahCalculateFunc();
        this.mhahSunMoonTimer = new mhahSunMoonTimer_1.MhahSunMoonTimer();
        this.mhahCalendar = new mhahCalendar_1.MhahCalendar();
    }
    calculate(dt) {
        return this.mhahCalculateFunc.calculate(dt, this.mhahLocalConstant);
    }
    calendar(dt, lat, lng, height) {
        return this.mhahCalendar.calendar(this.mhahLocalConstant, dt, lat, lng, height);
    }
    sunTimer(date, lat, lng, height) {
        height = height || 0;
        return this.mhahSunMoonTimer.sunTimer(date, lat, lng, height);
    }
    getMhahConstant(catgory, name) {
        return this.mhahLocalConstant[catgory][name];
    }
    setMhahConstant(catgory, name, mhahlist) {
        this.mhahLocalConstant[catgory][name] = mhahlist;
    }
    getGanaMatched(brideIno, groomIno) {
        return this.mhahPkgConstants.GanaMatched[brideIno][groomIno];
    }
}
exports.MhahPanchang = MhahPanchang;
