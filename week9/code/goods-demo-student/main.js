// ============================================================
//  商品管理 · 前后端联调练习（学生版）
//  任务：把带 TODO 的地方补完，让页面能加载 / 搜索 / 新增商品
//  运行前：确认 json-server 已经启动（http://localhost:3000/goods）
// ============================================================

const baseUrl = 'http://localhost:3000/goods'

const tableBody = document.querySelector('#table-body')
const searchInput = document.querySelector('#search')
const titleInp = document.querySelector('#title')
const priceInp = document.querySelector('#price')
const stockInp = document.querySelector('#stock')
const addBtn = document.querySelector('#addBtn')
const msg = document.querySelector('#msg')

// 把请求回来的数据先存一份，搜索的时候就不用反复请求接口了
let goodsList = []


// ------------------------------------------------------------
// TODO 1：写一个 render 函数，把商品数组渲染到表格里
//
// 思路（三步）：
//   1. 先清空表格：tableBody.innerHTML = ''
//   2. 遍历 list：list.forEach(item => { ... })
//   3. 每次遍历创建一行 tr，塞进 tableBody
//
// 提示：一行的内容可以这样拼
//   tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.stock}</td>`
// 提示：创建元素用 document.createElement('tr')
// 提示：追加到表格用 tableBody.appendChild(tr)
// ------------------------------------------------------------
function render(list) {
  // ↓↓↓ 在这里写代码 ↓↓↓


  // ↑↑↑ 在这里写代码 ↑↑↑
}


// ------------------------------------------------------------
// TODO 2：写一个 loadGoods 函数，请求接口拿到全部商品
//
// 思路（三步）：
//   1. const res = await fetch(baseUrl)      —— 发请求，await 等到响应
//   2. const data = await res.json()          —— 把响应转成 JS 数组
//   3. 存到 goodsList，再调用 render 渲染
//
// 注意：函数前面要写 async
// ------------------------------------------------------------
async function loadGoods() {
  // ↓↓↓ 在这里写代码 ↓↓↓


  // ↑↑↑ 在这里写代码 ↑↑↑
}


// ------------------------------------------------------------
// TODO 3：搜索过滤（在已有的数据里过滤，不重新请求接口）
//
// 思路：
//   1. 拿到输入框的值：this.value.trim().toLowerCase()
//   2. 用 filter 过滤标题：item.title.toLowerCase().includes(kw)
//   3. 把过滤后的数组交给 render
//
// 提示：oninput 事件会在每次输入时触发
// ------------------------------------------------------------
searchInput.oninput = function () {
  // ↓↓↓ 在这里写代码 ↓↓↓


  // ↑↑↑ 在这里写代码 ↑↑↑
}


// ------------------------------------------------------------
// TODO 4：点击按钮，把新商品 POST 给后端
//
// 思路：
//   1. 收集表单数据，组装成对象
//      { title: titleInp.value, price: Number(priceInp.value), stock: Number(stockInp.value) }
//   2. fetch 发 POST，两个配置不能漏：
//      headers: { 'Content-Type': 'application/json' }
//      body: JSON.stringify(newGoods)
//   3. 用 res.ok 判断成功，成功后清空表单 + 重新 loadGoods()
// ------------------------------------------------------------
addBtn.onclick = async function () {
  // ↓↓↓ 在这里写代码 ↓↓↓


  // ↑↑↑ 在这里写代码 ↑↑↑
}


// 页面一打开就加载数据
loadGoods()
