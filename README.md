# TypeScript学习练习项目

这是一个用于学习和练习TypeScript的基础项目，包含了从基础语法到类型系统的各种练习内容。通过实践不同的类型系统概念，帮助初学者逐步掌握TypeScript的核心特性。

## 项目结构

项目采用混合组织结构，包含按日期归档的练习文件和标准的源码目录：

```
├── .gitignore           # Git忽略配置文件
├── .idea/               # IDE配置目录
├── .vscode/             # VSCode配置目录
├── 2025-07-07/          # 按日期组织的练习目录
│   ├── hello.js         # 编译后的JavaScript文件
│   └── hello.ts         # TypeScript源文件
├── 2025-07-08/          # 按日期组织的练习目录
│   ├── 02_basic.js      # 编译后的JavaScript文件
│   ├── 02_basic.ts      # TypeScript源文件
│   └── index.html       # HTML入口文件
├── 2025-08-18/          # 按日期组织的练习目录
│   ├── types.js         # 编译后的JavaScript文件
│   └── types.ts         # TypeScript源文件（类型系统练习）
├── 2025-10-12/          # 按日期组织的练习目录
│   ├── app.ts           # TypeScript源文件
│   └── index.ts         # TypeScript源文件
├── src/                 # 主要源码目录
│   ├── app.ts           # TypeScript源文件
│   ├── index.ts         # TypeScript源文件
│   ├── m.ts             # TypeScript源文件
│   └── 编译后的.js文件   # 对应TypeScript文件编译后的JavaScript文件
├── dist/                # 编译输出目录
│   ├── app.js           # 合并后的JavaScript输出文件
│   ├── index.js         # 编译后的JavaScript文件
│   └── m.js             # 编译后的JavaScript文件
├── tsconfig.json        # TypeScript配置文件
└── package.json         # 项目配置和依赖管理
```

## 配置说明

### TypeScript配置 (tsconfig.json)

项目使用了以下关键TypeScript配置：

- **编译目标**：ES2015
- **输出目录**：`./dist`
- **合并输出**：所有源文件合并为`./dist/app.js`
- **文件包含**：包含`src/`目录下的所有文件
- **文件排除**：排除测试文件`*.spec.ts`
- **额外选项**：允许编译和检查JavaScript文件

### 项目依赖 (package.json)

- **TypeScript版本**：5.8.3
- **构建脚本**：提供`npm run build`命令执行编译

## 练习内容

项目包含了丰富的TypeScript学习内容，按照学习进度递增：

### 1. 基础语法练习

- **hello.ts**：最简单的TypeScript示例，打印"HELLO TS"
- **02_basic.ts**：基础类型声明和函数参数类型定义的练习
  ```typescript
  let a1: number;
  a1 = 1;
  
  let b1: string;
  b1 = "HELLO";
  
  let c1: boolean;
  c1 = true;
  
  function sum(a: number, b: number) {
      return a + b;
  }
  ```

### 2. 类型系统练习 (types.ts)

这是项目中最全面的练习文件，包含了TypeScript的各种类型系统特性：

- **字面量类型**：`let a: 10;`
- **联合类型**：`let b: "male" | "mfalse";`, `let c: boolean | string;`
- **any类型**：关闭类型检查的特殊类型
- **类型推导**：声明变量不指定类型时的自动类型推断
- **unknown类型**：类型安全的any类型
- **类型断言**：`e as string` 和 `<string>e`两种语法
- **void类型**：表示无返回值的函数
- **never类型**：表示永远不会返回结果的函数

### 3. 模块系统练习

src目录下的文件包含了模块系统的基本练习，包括变量声明、类型定义和注释掉的模块导入导出示例。

## 使用方法

虽然全局TypeScript编译器未安装，但项目已配置了本地TypeScript依赖和编译脚本：

1. **安装依赖**
   ```bash
   npm install
   ```

2. **编译项目**
   ```bash
   npm run build
   ```

编译后的JavaScript文件会输出到`dist/`目录，按照tsconfig.json的配置进行组织。

## 学习建议

1. 按照日期顺序查看和练习各个文件，了解TypeScript学习的渐进过程
2. 修改和扩展现有代码，尝试不同的TypeScript特性
3. 查看编译后的JavaScript文件，了解TypeScript是如何转换为JavaScript的
4. 尝试添加新的TypeScript文件，练习不同的类型和语法特性

这个项目是学习TypeScript的理想起点，通过实践不同的类型系统概念，帮助初学者逐步掌握TypeScript的核心特性。