const initProject = [
  { 
      type   : 'confirm',  
      name   : 'useRedux', 
      message: '是否使用状态管理器Redux:', 
      choices:[
          {name: '是', value: true},
          {name: '否', value: false},
      ]
  },
  { 
      type   : 'list',  
      name   : 'ui',       
      message: '请选用技术栈:',      
      choices:[
          {name: 'koa + redux + antd',       value: 'koa-redux-antd'},
          {name: 'koa + redux + ant-mobile', value: 'koa-redux-ant-mobile'},
          {name: 'koa + redux + ice',        value: 'koa-redux-ice'},
          {name: 'koa + redux + alifd/next', value: 'koa-redux-alifd/next'},
      ],
      when: function(options) {
          return options.useRedux
      }
  },
  { 
      type   : 'list',  
      name   : 'ui',       
      message: '请选用技术栈:',      
      choices:[
          {name: 'koa + antd',       value: 'koa-antd'},
          {name: 'koa + ant-mobile', value: 'koa-ant-mobile'},
          {name: 'koa + ice',        value: 'koa-ice'},
          {name: 'koa + alifd/next', value: 'koa-alifd/next'},
      ],
      when: function(options) {
          return !options.useRedux
      }
  },
]

const runProject = [
    { 
        type   : 'confirm',  
        name   : 'runProject', 
        message: '是否运行项目', 
        choices:[
            {name: '是', value: true},
            {name: '否', value: false},
        ]
    },
]
module.exports = {
    initProject,
    runProject
}