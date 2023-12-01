# monorepo demo(node:18.18.1)

> test monorepo demo 在 package core 中引入 components、utils 套件
*  pnpm -F @packages/core add @packages/components@*
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
> Hero Nick start his adventure
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