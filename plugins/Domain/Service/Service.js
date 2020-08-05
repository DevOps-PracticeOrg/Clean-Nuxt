import _ from "lodash"

export default {
  setInject: function (seedList, injectFunc) {
    let main,
      inherit,
      roopImp,
      roopMethods,
      implement,
      executeInject,
      roopInject

    let BaseService = {
      data: Object,
      init: function (data) {
        return data
      },
      handle: function (data) {
        return data
      },
      execute: function (data) {
        let values = this.init(data)
        return this.handle(values)
      },
    }

    main = function () {
      _.reduce(
        [roopImp, roopInject],
        function (seed, funcEl) {
          return funcEl(seed)
        },
        seedList
      )
    }

    roopImp = function (impList) {
      let setMethods = implement(inherit, BaseService)
      return roopMethods(impList, setMethods)
    }

    roopMethods = function (list, func) {
      return _.map(list, function (el) {
        return func(el)
      })
    }

    implement = function (func, proto) {
      function setMethods(obj) {
        let target = func(proto)
        let keys = Object.keys(obj)
        keys.forEach((key) => {
          target[key] = obj[key]
        })
        return target
      }
      return setMethods
    }

    executeInject = function (func) {
      return function (list) {
        _.map(list, function (el) {
          func(el.name, el)
        })
      }
    }

    roopInject = executeInject(injectFunc)

    inherit = function (proto) {
      var F = function () {}
      F.prototype = proto
      return new F()
    }
    main()
  },
}
