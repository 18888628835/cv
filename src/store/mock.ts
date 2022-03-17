// 工作履历
export const ExperienceData = [
  {
    id: 1,
    title: '前端开发,杭州秦云数字,杭州 — 2021.4 - Now',
    date: '云南省搬迁安置管理平台',
    project: '',
    Introduction:
      '技术栈：ant design、Echarts、umi、proComponents、React、TypeScript、redux 等',
    work: '项目描述',
    workContent:
      '为云南省发改委开发的用于搬迁安置业务的后台审批、工作流程、权限管理、财务管理等多条业务线的ERP系统，共有 300余个路由，总投入团队人员30+，目前项目已验收进入维护阶段。',
    title1: '项目成果',
    title2: '',
    gains: [
      '推广团队使用 TypeScript 、ahooks 等技术提升开发质量和效率',
      '开发政务大屏，支持地图切换、地区下钻、动态定点、轮播表等功能，提高了对 Echarts的实践能力 ',
      '组建开发公司B端业务组件库，提升前端团队整体开发效率',
      '全年共完成 50+前端页面，占总量的 1/4',
      '探索前端性能优化有关技术，提升约 20%的页面性能',
      '最佳新人员工奖',
    ],
    result: [],
  },
  {
    id: 2,
    title: '项目经理,上海通办信息,杭州 — 2018.11 - 2021.3',
    date: '衢州市政务空间&&北京市企业空间',
    project: '项目描述',
    Introduction:
      '融合政务网基础信息库,实现企业信息资源汇聚,为政府梳理最小颗粒度办事指南,完成一件事最多跑一次的业务流程改造，并利用企业空间汇集企业信息，为企业全生命周期提供精准推送功能。',
    work: '',
    workContent: '',
    title1: '项目成果',
    title2: '',
    gains: [
      '获得PMI认证PMP证书',
      '熟练掌握mySql、Office、processOn、墨刀等工具',
      '撰写部门内60%以上业务流程手册,并数次组织业务培训',
      '梳理工作流程,推广SVN等文档管理工具,提高团队30%以上工作效率。',
      '学习前后端领域技术，参加自学考试取得学位证书',
      '带领团队获得衢州市政府表扬信2封',
      '获得公司勇挑重担奖、金点子奖',
      '团队管理经验',
    ],
    result: [],
  },
  // {
  //   id: 3,
  //   title: '宁波大宗商品交易所,风控组长',
  //   date: '2014年7月-2018年7月',
  //   project:
  //     '主要负责风控数据汇总、统计、上报,对接大宗商品交易所,审核客户资料、业务培训、业务流程梳理、优化等',
  //   Introduction: '获得优秀员工奖励',
  //   work: '',
  //   workContent: '',
  //   title1: '',
  //   title2: '',
  //   gains: [],
  //   result: [],
  // },
];
// 项目经历
export const projectData = [
  {
    title: '全栈项目-番茄记账',
    description:
      '记账 web app，前后端开发、UI 设计、产品设计均由自己完成。实现注册登陆、账单CRUD、全年账单、月度账单、账单占比分析、个人信息修改等功能模块，目前已上线部署在阿里云服务器',
    skill: '技术栈：Egg、Nodejs、sequelize、React hooks、redux等',
    content1: '体验地址',
    gains: [
      '利用 nginx 缓存静态资源，提高图片二次请求的速度',
      '利用redux缓存后端数据，减少 HTTP 请求次数，缓解服务器压力',
      '利用koa 洋葱模型，由全局异常中间件统一处理所有接口数据',
    ],
    link1: 'http://123.56.105.114/',
    content2: '图片预览',
    link2:
      'https://github.com/18888628835/account-book-front-end/tree/main#account-book-front-end',
  },
];
// 技能清单
export const skillsData = [
  { skillName: 'React', percent: 85 },
  { skillName: 'TypeScript', percent: 80 },
  { skillName: 'Nodejs', percent: 60 },
  { skillName: 'Echarts', percent: 75 },
  { skillName: 'Dva.js', percent: 80 },
  { skillName: '小程序', percent: 75 },
];
// 个人详情
export const detailData = [
  { title: '地址', message: '本科,杭州' },
  { title: '电话号码', message: '18888628835' },
  { title: '电子信箱', message: 'qiuyanxi1992@gmail.com' },
  { title: '出生日期', message: '1992年' },
];

//开源项目
export const openSourceData = [
  {
    name: '娱乐项目',
    describe: '',
    list: [
      {
        link: 'https://18888628835.github.io/Simpler-Components/progress',
        name: 'UI组件库-Simpler Components',
      },
      {
        link: 'https://18888628835.github.io/pikachu/dist/index.html',
        name: '会动的皮卡丘',
      },
      {
        link: 'https://18888628835.github.io/RunningBear/HTML/RunningBear.html',
        name: '奔跑的大熊',
      },
      {
        link: 'https://18888628835.github.io/taiji/src/',
        name: '太极图',
      },
      {
        link: 'https://18888628835.github.io/tomato/#/',
        name: '番茄闹钟',
      },
      {
        link: 'https://18888628835.github.io/navigation/dist/index.html',
        name: 'navigator',
      },
      {
        link: 'https://18888628835.github.io/book_keeping/#/',
        name: 'Tally',
      },
    ],
  },
];
//连接数据
export const linkData = [
  {
    title: 'Blog',
    message: [
      {
        link: 'https://github.com/18888628835',
        info: 'github-博客200+篇',
      },
      {
        link: 'https://juejin.cn/user/3940246036424679/posts',
        info: '掘金',
      },
    ],
  },
];
