# miniCpmponents 组件库

教程：[如何发布小程序组件到 npm.js 中 | 微信开放社区 (qq.com)](https://developers.weixin.qq.com/community/develop/article/doc/0006445642c5688dccfa24fe651413)

## 一、js 版本

### 1、不把额外的文件上传

```javascript
components/
pages/
app.js
app.json
app.wxss
package.json
# 或者把package.json放要上传的文件夹下,上面表示不上传到npm
```

### 2、package.json

```json
{
	"name": "zt-minicomonent",
	"version": "0.0.2",
	"description": "zt小程序组件库",
	"main": "index.js", // 入口，一般小程序没啥用
	"miniprogram": "miniprogram/packages", // 打包入口
	"files ": ["packages"], // 要上传的文件
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/zhangtaouc/miniComonents.git"
	},
	"keywords": ["微信小程序", "zt", "miniprogram"],
	"author": "zhangtaouc",
	"license": "ISC",
	"bugs": {
		"url": "https://github.com/zhangtaouc/miniComonents/issues"
	},
	"homepage": "https://github.com/zhangtaouc/miniComonents#readme",
	"dependencies": {
		"zt-minicomonent": "^0.0.2"
	}
}
```

### 3、创建页面的时候要以组件的形式

![image-20240411144733121](C:\Users\31319\AppData\Roaming\Typora\typora-user-images\image-20240411144733121.png)

```json
{
	"component": true
}
```

### 4、组件使用

```json
{
	"usingComponents": {
		"zt-test": "zt-minicomonent/zt-test"
	}
}
```

### 5、项目格式化

下载 prettierr 插件，配合.prettierrc

```json
{
	// 一行最多多少个字符
	"printWidth": 200,
	// 指定每个缩进级别的空格数
	"tabWidth": 2,
	// 使用制表符而不是空格缩进行
	"useTabs": true,
	// 在语句末尾打印分号
	"semi": false,
	// 使用单引号而不是双引号
	"singleQuote": true,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	"quoteProps": "as-needed",
	// 在JSX中使用单引号而不是双引号
	"jsxSingleQuote": false,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	"trailingComma": "es5",
	// 在对象文字中的括号之间打印空格
	"bracketSpacing": true,
	// jsx 标签的反尖括号需要换行
	"jsxBracketSameLine": false,
	// 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
	"arrowParens": "always",
	// 不需要自动在文件开头插入 @prettier
	"insertPragma": false,
	// 使用默认的折行标准 always\never\preserve
	"proseWrap": "preserve",
	// 指定HTML文件的全局空格敏感度 css\strict\ignore
	"htmlWhitespaceSensitivity": "css",
	// Vue文件脚本和样式标签缩进
	"vueIndentScriptAndStyle": false,
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	"endOfLine": "lf",
	"overrides": [
		{
			"files": "*.wxml",
			"options": {
				"parser": "html"
			}
		},
		{
			"files": "*.wxss",
			"options": {
				"parser": "css"
			}
		},
		{
			"files": "*.wxs",
			"options": {
				"parser": "babel"
			}
		}
	]
}
```

在微信开发工具中加入

```json
"editor.formatOnSave": true,
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.documentSelectors": ["**/*.wxml", "**/*.wxss", "**/*.wxs"]
```

### 6、工具类使用

```javascript
const method = require('zt-minicomonent')
method.xxx
```
