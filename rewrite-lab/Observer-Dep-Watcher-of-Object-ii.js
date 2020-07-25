function observe (value) {
  if (!isObject(value)) return

  let ob
  ob = new Observer()
  return ob
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
    this.dep = new Dep()
    def(value, '__ob__', this)

    if (!Array.isArray(value)) this.walk(value)
  }

  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

function defineReactive (obj, key, val) {
  debugger
  if (isObject(val)) observe(val)

  // 如何追踪变化
  // Object.defineProperty 可以侦测到对象的变化
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      const ob = this.__ob__
      ob.dep.depend()
      return val
    },
    set: function (newVal) {
      debugger
      if (newVal === val) return
      val = newVal
      const ob = this.__ob__
      ob.dep.notify()
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
    debugger
    this.addSub(Dep.target)
  }

  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++ ) {
      subs[i].update()
    }
  }
}

Dep.target = null

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
    Dep.target = this
    let value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
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

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

// 测试
var data = {
  dawn: 'xuu'
}

new Observer(data)

var watcher = new Watcher(data, 'dawn', (newVal, oldVal) => {
  console.log('通知更新了', `newVal = ${newVal} oldVal = ${oldVal}`)
})
