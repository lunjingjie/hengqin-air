import IndexService from '@/service/index-service';

function changeTime(datetime) {
  const date = new Date(datetime);
  const currentDate = new Date(date.getTime() + 28800000);
  return currentDate.toISOString().substr(0, 19);
}

// 返回当天时间字符串
function todayToString() {
  const date = new Date();
  const currentDate = new Date(date.getTime() + 28800000);
  return currentDate.toISOString().substr(0, 19).replace('T', ' ');
}

// 返回昨天时间字符串
function yesterdayToString() {
  const date = new Date();
  const yesterdy = new Date();
  yesterdy.setTime(date.getTime() - 57600000);
  return yesterdy.toISOString().substr(0, 19).replace('T', ' ');
}

// 返回前一小时时间
function beforeHour() {
  const date = new Date();
  const beforehour = new Date();
  beforehour.setTime(date.getTime() + 25200000);
  return beforehour.toISOString().substr(0, 19).replace('T', ' ');
}

function tagColorByParamStandard(data, type) {
  let levelColor = '';
  IndexService.PARAM_LEVEL[type].some((levelVal, index) => {
    // 判定是否为等级1
    if (index === 0 && data < levelVal) {
      levelColor = IndexService.LEVEL_COLOR[index];
      return true;
      // 如果循环到最后一个等级，则设定颜色为最大等级，并返回true跳出循环
    } else if (index === IndexService.PARAM_LEVEL[type].length - 1) {
      levelColor = IndexService.LEVEL_COLOR[index + 1];
      return true;
    }
    // 如果循环位于等级之间，则设定等级颜色，并返回true跳出循环
    if (data >= levelVal &&
      data < IndexService.PARAM_LEVEL[type][index + 1]) {
      levelColor = IndexService.LEVEL_COLOR[index + 1];
      return true;
    }
    // 如果以上皆不符合，则返回false继续循环
    return false;
  });
  return levelColor;
}

/**
 * 全区域模式下返回有数据的最后一小时
 * 如14:25分，则返回有数据最后一小时是13:00 ~ 14:00
 * @returns {null}
 */
function allAreaTime() {
  const now = new Date();
  if (now.getMinutes() < 30) {
    const tempendTime = new Date(now.getTime() + 25200000);
    const tempstartTime = new Date(now.getTime() + 21600000);
    const startTime = `${tempstartTime.toISOString().substring(0, 13)}:00:00`;
    const endTime = `${tempendTime.toISOString().substring(0, 13)}:00:00`;
    return {
      startTime: startTime.replace('T', ' '),
      endTime: endTime.replace('T', ' '),
      dayStartTime: `${startTime.substring(0, 10)} 00:00:00`,
      dayEndTime: endTime.replace('T', ' '),
    };
  }
  const tempendTime = new Date(now.getTime() + 28800000);
  const tempstartTime = new Date(now.getTime() + 25200000);
  const startTime = `${tempstartTime.toISOString().substring(0, 13)}:00:00`;
  const endTime = `${tempendTime.toISOString().substring(0, 13)}:00:00`;
  return {
    startTime: startTime.replace('T', ' '),
    endTime: endTime.replace('T', ' '),
    dayStartTime: `${startTime.substring(0, 10)} 00:00:00`,
    dayEndTime: endTime.replace('T', ' '),
  };
}

/**
 * 根据月份获取开始时间、结束时间
 * @returns obj 月份开始时间与结束时间
 */
function getLastMonth(time) {
  const now = new Date();
  now.setTime(time.getTime() + 28800000);
  const obj = {};
  if (now.getMonth() === 11) {
    obj.startTime = `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1}-01 00:00:00`;
    obj.endTime = `${now.getFullYear() + 1}-01-01 00:00:00`;
    return obj;
  }
  obj.startTime = `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1}-01 00:00:00`;
  obj.endTime = `${now.getFullYear()}-${now.getMonth() + 2 < 10 ? `0${now.getMonth() + 2}` : now.getMonth() + 2}-01 00:00:00`;
  return obj;
}

// 获取当前月份时间
function getMonth() {
  const now = new Date();
  if (now.getMonth() === 0) {
    return `${now.getFullYear() - 1}-12-01 00:00:00`;
  }
  return `${now.getFullYear()}-${now.getMonth() < 10 ? `0${now.getMonth()}` : now.getMonth()}-01 00:00:00`;
}

const CHANGE_PARAM_TYPE = {
  'PM2.5(μg/m3)': 'KPM25',
  'PM10(μg/m3)': 'KPM10',
  KPM25: 'PM2.5',
  KPM10: 'PM10',
};

/**
 * 通过放大缩小地图，获取对应的marker比例
 * @param zoomLevel
 * @param meter
 * @returns {*}
 */
function mapDistanceToCmCalculator(zoomLevel, meter) {
  switch (zoomLevel) {
    case 11:
      return (meter / 5777.90576700) * 2;
    case 12:
      return (meter / 2888.95288400) * 2;
    case 13:
      return (meter / 1444.47644200) * 2;
    case 14:
      return (meter / 722.23822090) * 2;
    case 15:
      return (meter / 361.11911045) * 2;
    case 16:
      return (meter / 180.559555225) * 2;
    default:
      return null;
  }
}

function mapFontToCmCalculator(zoomLevel) {
  switch (zoomLevel) {
    case 15:
      return 10;
    case 16:
      return 15;
    case 17:
      return 18;
    case 18:
      return 20;
    default:
      return 0;
  }
}

/**
 * 根据参数返回整点时间段
 * @param type 天、周、月
 */
function getTimeByType(type) {
  let res = {};
  // 今天
  const date = new Date();
  if (type !== 'month') {
    const yesterdy = new Date();
    let i = 1;
    if (type === 'day') {
      i = 1;
    } else if (type === 'week') {
      i = 7;
    }
    yesterdy.setTime(date.getTime() - (57600000 * i));
    res.startTime = `${yesterdy.toISOString().substring(0, 10)} 00:00:00`;
    res.endTime = `${date.toISOString().substring(0, 10)} 00:00:00`;
  } else {
    res = getLastMonth(date);
  }
  return res;
}

/**
 * 数组倒序排序
 * @param arr 所需要排序的数组
 * @returns {Function}
 */
function compare(arr) {
  return function (a, b) {
    const value1 = a[arr];
    const value2 = b[arr];
    return value2 - value1;
  };
}

/**
 * 去除重复
 * @param arr 所操作数组
 */
function dropRepetition(arr) {
  const target = [];
  let tempArr = [];
  // 将字符串转成数组
  tempArr = Array.from(arr);
  tempArr.forEach((value) => {
    // 如果target数组中没有该value，则将其添加到数组中
    if (!target.includes(value)) {
      target.push(value);
    }
  });
  return target;
}

export default {
  changeTime,
  todayToString,
  yesterdayToString,
  beforeHour,
  tagColorByParamStandard,
  allAreaTime,
  CHANGE_PARAM_TYPE,
  getLastMonth,
  getMonth,
  mapDistanceToCmCalculator,
  mapFontToCmCalculator,
  getTimeByType,
  compare,
  dropRepetition,
};
