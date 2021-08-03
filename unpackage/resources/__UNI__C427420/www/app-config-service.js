
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/recommend/recommend","pages/dynamic/dynamic","pages/rank/rank","pages/mine/mine","pages/games/games","pages/contact/contact","pages/community/community","pages/game-detail/game-detail","pages/login/login","pages/register/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"taptap","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#AAAAAA","selectedColor":"#47b5dd","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/image/icon/sy.png","selectedIconPath":"static/image/icon/sy_clink.png"},{"text":"推荐","pagePath":"pages/dynamic/dynamic","iconPath":"static/image/icon/dynamic.png","selectedIconPath":"static/image/icon/dynamic_click.png"},{"text":"排行","pagePath":"pages/rank/rank","iconPath":"static/image/icon/rank.png","selectedIconPath":"static/image/icon/rank_clink.png"},{"text":"我的","pagePath":"pages/mine/mine","iconPath":"static/image/icon/mine.png","selectedIconPath":"static/image/icon/mine_clink.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"taptap","compilerVersion":"3.1.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/recommend/recommend","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/dynamic/dynamic","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/rank/rank","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/games/games","meta":{},"window":{"navigationBarTitleText":"游戏列表","enablePullDownRefresh":true}},{"path":"/pages/contact/contact","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/community/community","meta":{},"window":{"navigationBarTitleText":"社区交流","enablePullDownRefresh":false}},{"path":"/pages/game-detail/game-detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"Login"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"Register"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
