function defineReactive (data, key, val) {
  // 用于收集依赖
  let dep = new Dep()

  // 如何追踪变化
  // Object.defineProperty 可以侦测到对象的变化
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}

/**
 * 管理依赖的类
 * 所谓依赖，就是用到了data的地方，当data变化，需要通知依赖去更新
 */
export default class Dep {
  constructor () {
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  removeSub (sub) {
    remove (this.subs, sub)
  }

  depend () {
    if (window.target) {
      this.addSub(window.target)
    }
  }

  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++ ) {
      subs[i].update()
    }
  }
}

function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}