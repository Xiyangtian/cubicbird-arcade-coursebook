// ===== 课程进度配置文件 =====
//
// unlockedModule：当前教学进行到第几个功能。
//   它控制每个功能页「课前准备 → 方式二」里的 demo 链接是否显示为可点击：
//   - 功能 N 页面里放的是「功能 N 自己的 demo」链接（demoLinks[N]）
//   - 只有当 N <= unlockedModule（该功能已经上过/到达）时，才显示可点击链接
//   - 否则（还没上到这个功能）显示「找老师要链接」
//   例：unlockedModule = 1 → 功能 02、03 的方式二都显示「找老师要链接」
//       unlockedModule = 2 → 功能 02 的方式二可点击，功能 03 及以后仍是「找老师」
//       unlockedModule = 3 → 功能 02、03 的方式二都可点击，功能 04 及以后是「找老师」
//
// demoLinks：功能 N 的 demo（项目）链接，显示在功能 N 页面的「方式二」里。
//   按功能编号填写；某个功能暂时没有链接就留空 ''，对应的页面会显示「找老师要链接」。

window.COURSE_CONFIG = {
    unlockedModule: 2,

    demoLinks: {
        1: '',
        2: 'https://makecode.com/_KEqA0v4fuFvm',
        3: 'https://makecode.com/_fJHbx5esVgkF',
        4: 'https://makecode.com/_b7EP9P2V9FzX',
        5: 'https://makecode.com/_gMuF9kAUeTDt'
    }
};
