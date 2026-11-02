// ============================================================
//  商品管理 · 前后端联调（参考答案，含删除）
//  接口由 json-server 提供：http://localhost:3000/goods
// ============================================================

const baseUrl = 'http://localhost:3000/goods'

const tableBody = document.querySelector('#table-body')
const searchInput = document.querySelector('#search')
const titleInp = document.querySelector('#title')
const priceInp = document.querySelector('#price')
const stockInp = document.querySelector('#stock')
const addBtn = document.querySelector('#addBtn')
const msg = document.querySelector('#msg')

// 请求回来的数据存一份，搜索时用本地过滤，不用反复请求接口
let goodsList = []

function showMsg(text, isError = false) {
  msg.textContent = text
  msg.className = isError ? 'err' : ''
}

// ---------- 渲染表格 ----------
function render(list) {
  tableBody.innerHTML = ''
  if (list.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="5">暂无商品数据</td></tr>'
    return
  }
  list.forEach(item => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.stock}</td>
      <td><button class="del-btn" data-id="${item.id}">删除</button></td>
    `
    tableBody.appendChild(tr)
  })
}

// ---------- 查询：GET /goods ----------
async function loadGoods() {
  try {
    const res = await fetch(baseUrl)
    goodsList = await res.json()
    render(goodsList)
  } catch (err) {
    console.error(err)
    showMsg('请求失败：连不上后端，检查 json-server 是否启动（localhost:3000）', true)
  }
}

// ---------- 搜索：本地过滤 ----------
searchInput.oninput = function () {
  const kw = this.value.trim().toLowerCase()
  const filterList = goodsList.filter(item => item.title.toLowerCase().includes(kw))
  render(filterList)
}

// ---------- 新增：POST /goods ----------
addBtn.onclick = async function () {
  if (!titleInp.value.trim()) {
    showMsg('商品名称不能为空', true)
    return
  }
  const newGoods = {
    title: titleInp.value.trim(),
    price: Number(priceInp.value),
    stock: Number(stockInp.value)
  }
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoods)
    })
    if (res.ok) {
      const saved = await res.json()
      showMsg('新增成功！后端分配的 id = ' + saved.id)
      titleInp.value = ''
      priceInp.value = ''
      stockInp.value = ''
      loadGoods()
    } else {
      showMsg('提交失败，状态码：' + res.status, true)
    }
  } catch (err) {
    showMsg('请求失败，看控制台报错', true)
  }
}

// ---------- 删除：DELETE /goods/:id（课后拓展） ----------
// 事件委托：表格里每一行都会重新渲染，把监听放在父元素上最稳
tableBody.onclick = async function (e) {
  const btn = e.target.closest('.del-btn')
  if (!btn) return
  const id = btn.dataset.id
  if (!confirm('确定删除 id=' + id + ' 的商品吗？')) return
  const res = await fetch(baseUrl + '/' + id, { method: 'DELETE' })
  if (res.ok) {
    showMsg('删除成功')
    loadGoods()
  } else {
    showMsg('删除失败，状态码：' + res.status, true)
  }
}

// 页面一打开就加载数据
loadGoods()
