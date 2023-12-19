# Comandos para comenzar

## 1- Install bit en la pc

```
npx @teambit/bvm install
```

## 2- Crear un workspace

```
bit init
```

## 3- Despues dentro del archivo workspace.jsonc podemos modificar los nombres del workspace y el default space

## 4- Crear proyecto de react en un scope

```
    bit create react-app mfes/footer --aspect teambit.react/react-env
```

## 5- Para instalar librerias dentro de un proyecto

```
    bit deps set mfes/footer styled-components
```

## 6- Para correr el core de bit y ver los components, mfes, apps

```
    bit create react-app apps/my-app --aspect bitdev.react/react-env
```

### 6.1 Para anclar la app al core de bit

```
bit use apps/my-app
```
