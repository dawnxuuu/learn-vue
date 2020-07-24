function defineReactive (data, key, val) {
  debugger
  if (typeof val === 'object') new Observer(val)

  // 存放依赖
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
      debugger
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
class Dep {
  constructor () {
    debugger
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

/**
 * Watcher作为一个中介，集中处理收集所有用到data的情况
 * 依赖收集阶段只收集这个类的实例，通知也只通知它一个，它再通知其他地方。
 */
class Watcher {
  constructor(vm, expOrFn, cb) {
    debugger
    this.vm = vm
    this.getter = parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }

  get () {
    window.target = this
    let value = this.getter.call(this.vm, this.vm)
    window.target = undefined
    return value
  }

  update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}


/**
 * 将data上的属性全部进行getter/setter形式的转化来侦测变化
 *
 * @export
 * @class Observer
 */
class Observer {
  constructor (value) {
    debugger
    this.value = value
    if (!Array.isArray(value)) this.walk(value)
  }

  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

// 基础工具
/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Parse simple path.
 */
function parsePath(path) {
  const bailRE = /[^\w.$]/
  if (bailRE.test(path)) return
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

// 测试
var data = {
  dawn: 'xuu'
}

new Observer(data)

var watcher = new Watcher(data, 'dawn', (newVal, oldVal) => {
  console.log('通知更新了', `newVal = ${newVal} oldVal = ${oldVal}`)
})
