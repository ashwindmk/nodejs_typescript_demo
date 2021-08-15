# NodeJs Typescript

Setup project.

## Setup

#### 1. Install Typescript globally

This global install is for Typescript project setup and not for project source development.

```
npm i -g typescript
```

Verify the install by checking the version.
```
tsc -v
```

#### 2. Init Typescript
```
cd <project>

tsc --init
```

This will generate the `tsconfig.json` file.

#### 3. Configure

1. Create `build` folder for Javascript output files and `src` folder for Typescript files.

2. Set the **outDir** and **rootDir** path values in the `tsconfig.json` file as shown below.

```json
{
  "compilerOptions": {
      ...
      "outDir": "./build",
      "rootDir": "./src",
      ...
  }
}
```

**Note**: You can also name the build folder as `dist`.

3. Set the module resolution strategy to **node** in the `tsconfig.json` file as shown below.
```json
{
  "compilerOptions": {
      ...
      "moduleResolution": "node",
      ...
  }
}
```

4. Optionally, change the target to ES6 as shown below.
```json
{
  "compilerOptions": {
      ...
      "target": "es6",
      ...
  }
}
```

#### 4. Init NPM Project
```
npm init
```

#### 5. Install Dependencies

Since Typescript supports types, we can install Node and Express types using `@types/node` and `@types/express`.

```
npm i --save-prod express

npm i --save-dev typescript ts-node @types/node @types/express nodemon
```

#### 6. Configure NPM package.json
```json
...
"scripts": {
    "start": "node build/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p .",
    ...
}
```

#### 7. Create Project Typescript Files in Src

Write your Typescript code in `src/app.ts`.

#### 8. Start Server
```
npm run dev
```

#### 9. Test
```
http://localhost:3000/
```
