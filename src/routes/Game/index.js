import GameContainer from './containers/GameContainer'
import { injectReducer } from '../../store/reducers'


export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, callBack) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const GameContainer = require('./containers/GameContainer').default
      const reducer = require('./reducers/index').default
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'list', reducer })

      /*  Return getComponent   */
      callBack(null, GameContainer)

    /* Webpack named bundle   */
  }, 'flows_list')
  }
})
