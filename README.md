# BFS README

![logo](images/logo.png)

服务于 BFS 规范的插件

## Features

[✔] `PKGM` 项目隐藏文件。

## Requirements

此插件只在 `PKGM` 构建的项目中起作用。

## Extension Settings

现在支持配置 PKGM 隐藏规则。

```json
PKGM.excludes: {
  "**/package.json": true,
  "**/.*": true,
  "**/*.log": true,
  "**/*.lock": true,
  "**/tsconfig*": true,
}
```

### 发布插件

获取Personal Access Token

```bash
npm i -g vsce

vsce publish -p <token>
```

### For more information

- [BFChain](https://www.bfchain.com/home)
- [BFChain developer](https://developer.bfchain.com/)

**Enjoy!**
