/* eslint-disable max-len */
export const INDEX = '/geoserver/create/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=create:yc_bus_kpi&outputFormat=application%2Fjson';

/* 一.登录接口 */
export const LOGIN = '/auth/apply-token';

/* 二.系统、权限信息模块 */
// 查询用户可查询的页面模块( roleId: ${window.localStorage.getItem('roleId')} )
// export const PAGE_RESOURCE = `/web/role/${window.localStorage.getItem('roleId')}/pageResource`;
// export const SEARCH_BUS = `/web/role/${window.localStorage.getItem('roleId')}/enterprise`;

/* 实时数据 */
// export const CURRENT_DATA = `/web/realtimedata?roleId=${window.localStorage.getItem('roleId')}&sidx=datatime&sord=desc`;

/* 历史数据 */
// 获取表头

// 获取值
export const HISTORY_DATA = '/web/historydata';

/* 汇总GIS */
//  查询权限角色所能查询的enterpriseCode (GET_ENTERPRISECODE)
// 根据自定义时间查询历史数据(HISTORY_DATA)

/* 轨迹管理 */

/* 多曲线图 */
export const CURVE_DATA = '/web/historydata/line';

/* 多曲线图(多站点) */
// 查询权限角色可查询的enterpriseCode集合
// export const GET_ENTERPRISECODE = `/web/role/${window.localStorage.getItem('roleId')}/enterpriseCodes`;
// 获取数据集合
export const CURVE_LOCATION_DATA = '/web/historydata/multiLocationLine';

/* 数据比对 */

/* 地图信息录入 */
// 获取所有POI点树状组织
export const GET_POITREE = '/web/poi';
// 获取POI点的经纬度集合(/web/poi/{id})
