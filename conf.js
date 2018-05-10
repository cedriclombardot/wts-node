/*
* @Author: dm.yang
* @Date:   2015-04-09 14:36:58
* @Last Modified by:   dm.yang
* @Last Modified time: 2015-04-09 16:34:14
*/

'use strict';

module.exports = {
    monitorHost: process.env.MONITOR_HOST,
    monitorPort: 3977,
    conf: {
        group: process.env.APP_NAME
    },
    term: {
        cols: 135,
        rows: 50,
        cwd: process.env.HOME
    }
};
