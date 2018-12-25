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
          {name: 'koa',                      value: 1},
          {name: 'koa + redux',              value: 2},
          {name: 'koa + redux + antd',       value: 3},
          {name: 'koa + redux + ant-mobile', value: 4},
          {name: 'koa + redux + ice',        value: 5},
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
          {name: 'koa',              value: 1},
          {name: 'koa + antd',       value: 2},
          {name: 'koa + ant-mobile', value: 3},
          {name: 'koa + ice',        value: 4},
      ],
      when: function(options) {
          return !options.useRedux
      }
  },
]