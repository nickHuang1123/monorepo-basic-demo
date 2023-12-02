# Monorepo Demo(node:18.18.1)

"Monorepo" 是 "Monolithic Repository" 的簡稱，指的是將整個專案的程式碼、資源和相關文件都存放在單一的版本控制存儲庫中的開發方法。
好處就是引入即用，不會像是 Multi-Repo(Git Submodule)會需要針對每次套件做出更新時，引入處也得一併更新，Monorepo 大大改善了這點；再搭配 pnpm 能比 yarn、npm 提供更快速安裝速度和節省磁碟空間。
缺點的部分就是 .git 會越寫越肥

> monorepo demo 在 package core 中引入 components、utils 套件 (* 默認最新版本)
* pnpm -F @packages/core add @packages/components@*
* pnpm -F @packages/core add @packages/utils@*

### Files Tree
```javascript
└─packages
    ├─components
    ├─core
    │  └─node_modules
    │      └─@packages
    │          ├─components
    │          └─utils
    └─utils
```

### Install
```bash
pnpm i
```

### Start
```bash
node packages/core
```

### Result
```javascript
||#########
||#########
||#########
||
||
||
=================================
> -Hero Nick start his adventure from core-
=================================
    **
  **  **
 **    **
 **    **
 **    **
  **  **
    **
=========================================
> -Hero Nick get a courage from core-
=========================================
   ****
  ******
 ********
**********
 ********
  ******
   ****
    **
===========================================
> -Hero Nick get a Shield +9 from utils-
===========================================
    |
    |
    |
    |
    |
    |
 |--O--|
    |
    |
===============================================
> -Hero Nick get a Sword +9 from components-
===============================================
||
==========================================
> But he still can not defeat the Devil,
> Hero Nick finally dead in the battle.
==========================================
```