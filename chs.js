/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'A fresh start': '一个新的开始',
    'A well filled bag': '一个装满的袋子',
    'Actions': '行动',
    'AP Pistol': 'AP手枪',
    'Base Damage': '基础伤害',
    'Baseball Bat': '棒球棒',
    'Battle Axe': '战斧',
    'Brass Knuckles': '指节铜环',
    'Buy': '购买',
    'Bunker': '地堡',
    'Cash': '现金',
    'Close': '关闭',
    'Donate': '捐赠',
    'Fist': '拳头',
    'Fleeca Heist': '弗莱卡抢劫',
    'Current version v': '当前版本 v',
    'Cocaine': '可卡因',
    'Time Trial': '计时赛',
    'Weapons': '武器',
    'Weapon': '武器',
    'Weed dealer': '大麻经销商',
    'Weed Farm': '大麻农场',
    'Widowmaker': '寡妇制造者',
    'Wrench': '扳手',
    'You can get': '你会得到',
    'You can currently get': '你当前会得到',
    'You can also reset your save to to start a new game.': '您也可以重置存档以开始新游戏。',
    'You are actually using the character number': '您实际上是在使用字符数',
    'Knife': '刀',
    'Import': '导入',
    'Level': '等级',
    'Menu': '菜单',
    'Message': '消息',
    'Meth': '冰毒',
    'Micro SMG': '微型冲锋枪',
    'Mission': '任务',
    'Missions': '任务',
    'Musket': '步枪',
    'Next': '下一个',
    'Others': '其它',
    'Objectives': '目标',
    'Objective': '目标',
    'Nightstick': '警棍',
    'per click.': '每次点击。',
    'per second.': '每秒。',
    'Pickpocket': '扒手',
    'Price': '价格',
    'Player': '玩家',
    'Prison Break': '越狱',
    'Rank': '等级',
    'Railgun': '轨道炮',
    'Save': '保存',
    'Reset': '重置',
    'Roll stats': '随机属性',
    'Shotguns': '猎枪',
    'Sell': '出售',
    'Statistics': '统计',
    'Stun Gun': '电击枪',
    'Success': '成功',
    'Successfully completed the tutorial.': '成功完成了教程。',
    'Series A Funding': 'A轮融资',
    'Series A Funding Heist': 'A轮融资抢劫',
    'Human Labs': '人体实验室',
    'eavy Weapons': '重型武器',
    'Guide': '指南',
    'Guide - Presentation': '指南 - 演示',
    'Gusenberg Sweeper': '古腾堡清洁工',
    'Handguns': '手枪',
    'Hangar': '机库',
    'Heavy Pistol': '重型手枪',
    'Heavy Revolver Mk II': '重型左轮手枪Mk II',
    'Heavy Shotgun': '重型猎枪',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^New objective for\n(.+)/, '新的目标'],
    [/^Reached rank (.+).$/, '达到等级 $1 。'],
    [/^\n(.+)Rank$/, '等级'],
    [/^\n(.+)Announce\n(.+)$/, '声明'],
    [/^(.+) minutes (.+) seconds$/, '$1 分 $2 秒'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);