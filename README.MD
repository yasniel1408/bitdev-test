# Comandos para comenzar - Desarrollo local - Tipo Monorepo

## 1- Instalar bit en la PC

```
npx @teambit/bvm install
```

## 2- Crear un espacio de trabajo

```
bit init
```

## 3- Después, dentro del archivo `workspace.jsonc`, podemos modificar los nombres de la organización y el defaultScope

## 4- Crear una biblioteca de React en un scope, tomará el scope del `workspace.jsonc`

```
bit create react-app components/footer --aspect teambit.react/react-env
```

## 5- Para instalar bibliotecas dentro de un proyecto, componente, aplicación...

```
bit deps set components/footer styled-components
```

## 6- Para crear aplicaciones dentro del monorepo

```
bit create react-app apps/my-app --aspect bitdev.react/react-env
```

### 6.1 Para anclar la aplicación al núcleo de bit

```
bit use apps/my-app
```

## 7- Para ejecutar una aplicación

```
bit run my-app
o
bit start
```
