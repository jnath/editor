  SystemJS.config({
    baseURL:"./node_modules",
    // paths:{
    //   "/material-ui/*/":"/material-ui/*/index.js"
    // },
    map:{
      'material-ui/Subheader':"./node_modules/material-ui/Subheader/Subheader.js",
      'material-ui/SvgIcon':"./node_modules/material-ui/SvgIcon/SvgIcon.js ",
      'material-ui/Avatar':"./node_modules/material-ui/Avatar/Avatar.js",
      'material-ui/MenuItem':"./node_modules/material-ui/MenuItem/MenuItem.js",
      'material-ui/Menu':"./node_modules/material-ui/Menu/Menu.js",
      'material-ui/List':"./node_modules/material-ui/List/List.js",
      'material-ui/Paper':"./node_modules/material-ui/Paper/Paper.js",
      'material-ui/IconButton':"./node_modules/material-ui/IconButton/IconButton.js",
      'core-js/library/fn/symbol':"core-js/library/fn/symbol/index.js",
      'core-js/library/fn/symbol/iterator':"core-js/library/fn/symbol/iterator.js"
    },
    packages: {
      './lib': {
          defaultJSExtensions: 'js',
      },
      'react': { main: 'lib/React.js' },
      'react-dom': { main: 'lib/ReactDOM.js' },
      'fbjs': {},
      'object-assign': {
        main:'index.js'
      },
      "lodash.throttle":{
        main:"index.js"
      },
      'react-tap-event-plugin':{
        main:'src/injectTapEventPlugin.js'
      },
      'material-ui':{
        main:"index.js",
        map:{
          './Subheader':"./Subheader/Subheader.js",
          './SvgIcon':"./SvgIcon/SvgIcon.js ",
          './IconButton':"./IconButton/IconButton.js ",
          './Paper':"./Paper/Paper.js ",
        },
      },
      'prop-types':{
        main:'prop-types.js'
      },
      'babel-runtime':{},
      'lodash.merge':{
        main:'index.js'
      },
      'recompose':{},
      'core-js':{
        main:'index.js'
      },
      'warning':{
        main:"warning.js"
      },
      'inline-style-prefixer':{},
      'react-sortable-tree':{
        main:'dist/umd/react-sortable-tree.js'
      },
      'simple-assign':{
        main:'index.js'
      },
      'keycode':{
        main:'index.js'
      },
      'react-dnd':{
        main:'dist/ReactDnD.js'
      },
      'lodash.isequal':{
        main:'index.js'
      },
      'react-dnd-html5-backend':{
        main:'dist/ReactDnDHTML5Backend.min.js'
      },
      'react-dnd-scrollzone':{
        main:'lib/index.js'
      },
      'react-virtualized':{
        main:'dist/umd/react-virtualized.js'
      },
      'react-event-listener':{
        main:'lib/index.js'
      },
      'bowser':{
        main:'src/bowser.js'
      },
      'css-in-js-utils':{
        main:'lib/index.js'
      }
    }
  })
