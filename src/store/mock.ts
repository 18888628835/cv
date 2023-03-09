// 工作履历
export const ExperienceData = [
  {
    id: 0,
    title: '全栈开发(偏前端),日本Dashcomb,杭州 — 2022.4 - 至今',
    date: 'Dashcomb低代码平台',
    project: '',
    Introduction: '技术栈：后端 Adonis、前端 Next.js、测试 Jest、AWS云服务、Recoil、Docker等',
    work: '项目描述',
    workContent: '初创团队，主要做Sass后台和H5页面编辑的低代码平台',
    title1: '工作内容',
    title2: '',
    gains: [
      '参与数据响应方案的设计，并基于方案实现组件、数据、面板联动功能。例如 Table-column自动生成和拖拽、Table宽度拉拽、JavaScript 代码执行器、Events等功能',
      '所有配置面板以及公用配置面板的封装，自定义form-schema结构',
      '所有自用组件的表单校验工作（非 Antd 自带）',
      '用户自定义字体、Material 上传等功能的设计和实现',
      '负责前端数据的版本兼容，主要做数据库数据的 Migration【后端方向】',
      '根据 Webhooks 实现 Twitter 用户数据的业务逻辑分析、数据库 CRUD 等工作【后端方向】',
      '基于 Antd、Echarts等组件库的二次封装，完成所有自用组件的开发',
      'Jest 单元测试',
    ],
    result: [],
  },
  {
    id: 1,
    title: '前端开发,杭州秦云数字,杭州 — 2021.4 - 2022.4',
    date: '云南省搬迁安置管理平台',
    project: '',
    Introduction: '技术栈：TypeScript、hooks、Antd-design、Echarts、Dumi等',
    work: '项目描述',
    workContent:
      '为云南省发改委开发的用于搬迁安置业务的后台审批、工作流程、权限管理、财务管理等多条业务线的ERP系统，共有 300余个路由，总投入团队人员30+，目前项目已验收进入维护阶段。',
    title1: '工作内容',
    title2: '',
    gains: [
      '开发完整的政务大屏，支持地图切换、地区下钻、动态定点、轮播表等功能',
      '搭建前端组内部使用的业务组件库,并做了ESlint, ChangeLog,Commit 规范,github action等工作',
      '手写React原生组件—— 大屏适配器、Dialog、大屏滚动列表、虚拟列表、ResizableBox 等，并运用于项目中',
      '研究并完成前端性能优化工作',
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
    title1: '工作收获',
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
]
// 项目经历
export const projectData = [
  {
    title: '番茄记账',
    description: '用于记账的 web app，前后端开发、UI 设计、产品设计均由自己完成',
    skill: '',
    content1: '源码地址',
    gains: [
      '由于云服务器已到期，目前将前后端代码用 git-modules 的形式上传github,需要配合 Docker 开启',
      '技术栈：Docker-Compose、Nginx、HTTP2、React、Egg、Sequelize等',
    ],
    link1: 'https://github.com/18888628835/account-book',
    content2: '图片预览',
    link2: 'https://github.com/18888628835/account-book-front-end/tree/main#account-book-front-end',
  },
]
// 技能清单
export const skillsData = [
  { skillName: 'React', percent: 85 },
  { skillName: 'TypeScript', percent: 80 },
  { skillName: 'Nodejs', percent: 60 },
  { skillName: 'Jest', percent: 75 },
]
// 个人详情
export const detailData = [
  { title: '地址', message: '本科,杭州' },
  { title: '电话号码', message: '18888628835' },
  { title: '电子信箱', message: 'qiuyanxi1992@gmail.com' },
  { title: '出生日期', message: '1992年' },
]

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
]
//连接数据
export const linkData = [
  {
    title: '简介',
    message: [
      {
        link: '',
        info: 'PMP',
      },
      {
        link: 'https://juejin.cn/user/3940246036424679/posts',
        info: '掘金优秀创作者',
      },
      {
        link: 'https://github.com/18888628835',
        info: 'GitHub',
      },
      {
        link: 'https://18888628835.github.io/react-drag-resizable/',
        info: 'npm贡献:react-drag-resizable',
      },
      {
        link: 'https://qiuyanxi.com',
        info: 'https://qiuyanxi.com',
      },
    ],
  },
]
