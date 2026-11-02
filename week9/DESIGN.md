# DESIGN.md — 第9周 全栈基础：前端 ↔ 后端接口交互

> 风格延续第8周课件：浅色系主色调、简洁明亮。课堂教学课件（技术/培训类），主体为抽象结构化内容（代码、流程图、对比表）。
> 配图全部用 Box + FAIcon 内联绘制，不引入外部生成图，保证可编辑、零多余资源。

## 1. 画布与母版（硬值）

- 画布：**1280 × 720 px**（16:9）
- 页面 padding：上下 52，左右 72

| 母版区 | 垂直位置 | 内容 |
|:---|:---|:---|
| **A · 标签/标题块** | y = 52 – 130 | 上方小标签 15px #64748B letterSpacing 4 + 48×4 主色竖条；主标题 34px bold |
| **B · 内容区** | y = 130 – 656 | 一切正文、代码块、图示、卡片 |
| **C · 页脚条** | y = 656 – 700 | 左侧「第9周 · 前端 ↔ 后端接口交互」13px #94A3B8；右侧页码 `NN / 26` 13px Consolas #94A3B8 |

## 2. 色彩系统

| 角色 | HEX | 用途 |
|:---|:---|:---|
| 主色 | `#2563EB` | 标题竖条、主色块、流程主节点、强调 |
| 辅色 | `#06B6D4` | 渐变第二色、次级标签、第二列节点 |
| 强调色 | `#F59E0B` | 巨型数字、警示坑位、关键点圆点、金句条 |
| 文本主色 | `#0F172A` | 标题与正文 |
| 页面背景 | `#FFFFFF` | 全局底色 |
| 分区浅底 | `#F1F5F9` | 卡片底、代码块外框底 |
| 次要文本 | `#64748B` | 副标、页脚、注释 |
| 分隔线 | `#E2E8F0` | 边框、分割线 |
| 错误提示 | `#EF4444` | 报错、禁用状态 |

- 主渐变：`linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)`
- 卡片阴影：`0 4px 20px rgba(15, 23, 42, 0.08)`
- 装饰圆 opacity：0.04 – 0.10

## 3. 字体系统

| 层级 | 字体 | 字号 | 字重 |
|:---|:---|:-:|:-:|
| 封面主标题 | 微软雅黑 | 58px | bold |
| 封面副标题 | 微软雅黑 | 24px | normal |
| 章节页大字 | Consolas | 120px | bold |
| 巨型锚点数字 | Consolas | 72–96px | bold |
| 页面主标题（A区） | 微软雅黑 | 34px | bold |
| 卡片小标题 | 微软雅黑 | 22px | bold |
| 正文 | 微软雅黑 | 17–19px | normal |
| 代码 / 命令 / 字段名 | Consolas | 13–16px | normal |
| 页脚 / 页码 | 微软雅黑 | 13px | normal |

## 4. 信息密度门禁

- 内容页正文 ≥ 150 字（代码字符不计入，代码块须 ≥ 4 行）
- 留白 ≤ 35%，焦点元素四周 ≥ 40px 呼吸空间
- 卡片内文字 + 标签条垂直占满，尾部条 `marginTop: 'auto'` 钉底
- 禁止"均匀稀薄"排布

## 5. 页面映射表

| # | 文件 | 类型 | 角色 | L1 主视觉 |
|:-:|:---|:---|:---|:---|
| 01 | 01.slide | cover | hero | 请求-响应链路图（Box 绘制） |
| 02 | 02.slide | content | supporting | 四课时路线图卡片 |
| 03 | 03.slide | section | hero | 巨型编号 01 |
| 04 | 04.slide | content | supporting | 硬编码 vs 接口 对比图 |
| 05 | 05.slide | content | supporting | 请求三大部分结构图 |
| 06 | 06.slide | content | supporting | 状态码清单 |
| 07 | 07.slide | content | supporting | JSON 规则卡片 |
| 08 | 08.slide | content | **hero** | 转换代码块 |
| 09 | 09.slide | content | supporting | 接口规范表 + 小思考 |
| 10 | 10.slide | section | hero | 巨型编号 02 |
| 11 | 11.slide | content | supporting | 同步 vs 异步 对比图 |
| 12 | 12.slide | content | **hero** | fetch GET 代码 |
| 13 | 13.slide | content | **hero** | fetch POST 代码 |
| 14 | 14.slide | content | supporting | Fetch vs Axios 对比表 |
| 15 | 15.slide | content | supporting | 同源三要素图 |
| 16 | 16.slide | section | hero | 巨型编号 03 |
| 17 | 17.slide | content | **hero** | 三步走代码块 |
| 18 | 18.slide | content | supporting | 接口清单 |
| 19 | 19.slide | content | supporting | 提示词模板卡片 |
| 20 | 20.slide | section | hero | 巨型编号 04 |
| 21 | 21.slide | content | supporting | 需求清单卡片 |
| 22 | 22.slide | content | **hero** | index.html 代码 |
| 23 | 23.slide | content | **hero** | main.js 代码 |
| 24 | 24.slide | content | supporting | Network 面板检查表 |
| 25 | 25.slide | content | supporting | 任务清单 |
| 26 | 26.slide | ending | hero | 三编号小结 |

## 6. 组件约定

- 代码块统一 `<CodeBlock language='javascript' theme='github-light' macHeader={false}>`，命令行 `bash`，数据 `json`
- 图标统一 `FAIcon` 实心：`link` `exchange-alt` `server` `globe` `exclamation-triangle` `check-circle` `code` `terminal` `database` `search` `plus` `trash` `bolt` `question-circle`；同组尺寸统一 28px；严禁 Emoji
- B 区高度 526px，所有元素累加（含 gap）不得超出
