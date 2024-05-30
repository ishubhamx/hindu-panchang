import { MhahCalculateFunc } from './mhahCalculateFunc';
import { MhahLocalConstant } from './mhahLocalConstant';
import { MhahPkgConstants } from './mhahPkgConstants';
import { MhahSunMoonTimer } from './mhahSunMoonTimer';
import { MhahCalendar } from './mhahCalendar';
export class MhahPanchang {
    constructor() {
        this.mhahLocalConstant = new MhahLocalConstant();
        this.mhahPkgConstants = new MhahPkgConstants();
        this.mhahCalculateFunc = new MhahCalculateFunc();
        this.mhahSunMoonTimer = new MhahSunMoonTimer();
        this.mhahCalendar = new MhahCalendar();
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
