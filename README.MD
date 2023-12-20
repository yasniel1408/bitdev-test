# Comandos para comenzar - DESARROLLO LOCAL - Tipo Monorepo

## 1- Install bit en la pc

```
npx @teambit/bvm install
```

## 2- Crear un workspace

```
bit init
```

## 3- Despues dentro del archivo workspace.jsonc podemos modificar los nombres del workspace y el default space

## 4- Crear libreria de react en un scope, tomara el scope del workspace.jsonc

```
    bit create react-app components/footer --aspect teambit.react/react-env
```

## 5- Para instalar librerias dentro de un proyecto

```
    bit deps set components/footer styled-components
```

## 6- Para correr el core de bit y ver los components, components, apps

```
    bit create react-app apps/my-app --aspect bitdev.react/react-env
```

### 6.1 Para anclar la app al core de bit

```
bit use apps/my-app
```

## 7- Para correr una app

```
bit run my-app
```
