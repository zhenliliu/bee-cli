module.exports = [
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
          {name: 'koa + redux',              value: 'koa-redux'},
          {name: 'koa + redux + antd',       value: 'koa-redux-antd'},
          {name: 'koa + redux + ant-mobile', value: 'koa-redux-ant-mobile'},
          {name: 'koa + redux + ice',        value: 'koa-redux-ice'},
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
      ],
      when: function(options) {
          return !options.useRedux
      }
  },
]