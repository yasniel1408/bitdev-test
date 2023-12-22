# Que es Bit.dev? ![./bitdev.png](https://avatars.githubusercontent.com/u/24789812?s=50&v=4)

doc: https://bit.dev/
github: https://github.com/teambit
bit.cloud: https://bit.cloud/enterprise


![./bitdev.png](https://static.bit.dev/brands/logo-typescript.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-jest.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-eslint.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-prettier.svg)
![./bitdev.png](https://static.bit.dev/extensions-icons/typescript.svg)


### 1- Bit es un sistema de compilación para software componible. 
* Hace que la composición de aplicaciones a partir de componentes con versiones independientes sea fluida y rápida.

```mermaid
graph TD
  A[Software Componible]
  B[(Componente 1)]
  C[(Componente 2)]
  D[(Componente 3)]
  E[(...)]

  style A fill:green,stroke:#fff,stroke-width:2px,color:#fff;
  style B fill:magenta,stroke:#fff,stroke-width:2px,color:#fff;
  style C fill:orange,stroke:#fff,stroke-width:2px,color:#fff;
  style D fill:yellow,stroke:#fff,stroke-width:2px,color:#000;
  style E fill:#66ccff,stroke:#fff,stroke-width:2px,color:#fff;

  subgraph Software Componible
    A
  end

    subgraph Componentes en Bit.cloud
        subgraph Container
            B
        end
        subgraph Container
            C
        end
        subgraph Container
            D
        end
        subgraph Container
            E
        end
    end

  A --> B
  A --> C
  A --> D
  A --> E

```

### 2- La principal innovación de Bit es Bit Component 
* Bit Component es un contenedor para componentes de software componibles completamente desacoplado.
```mermaid
graph TD
subgraph "Evolución a Software Componible"
    A((Inicio))
    B(Aplicación React con Compound Component)
    C[Identificar Funcionalidades Desacopladas]
    D[Crear Librerías o Paquetes Independientes]
    E[Integrar Librerías en la Aplicación]

    style A fill:blue,stroke:#006699,stroke-width:2px,color:#fff;
    style B fill:red,stroke:#006699,stroke-width:2px,color:#fff;
    style C fill:orange,stroke:#006699,stroke-width:2px,color:#fff;
    style D fill:green,stroke:#006699,stroke-width:2px,color:#fff;
    style E fill:blue,stroke:#006699,stroke-width:2px,color:#fff;

    A --> B
    B --> C
    C -->|Identificar| D
    D --> E
end
```
```mermaid
graph TD
subgraph "Entorno Software Componible"
    style O fill:green,stroke:#006699,stroke-width:2px,color:#fff;
    K[App]
    L[WrapperCardComponent]
    M[CardBodyComponent]
    N[CardHeaderComponent]
    O[ButtonComponent Lib]

    K2[App2]
    L2[WrapperCardComponent]
    M2[CardBodyComponent]
    N2[CardHeaderComponent]
    
    K --> L
    L --> M
    L --> N
    M -..-> O

    K2 --> L2
    L2 --> M2
    L2 --> N2
    M2 -..-> O
end

subgraph "Composición de Componentes en React"
    style J fill:green,stroke:#006699,stroke-width:2px,color:#fff;
    F[App]
    G[WrapperCardComponent]
    H[CardBodyComponent]
    I[CardHeaderComponent]
    J[ButtonComponent]

    F --> G
    G --> H
    G --> I
    H --> J
end

```
* Se puede considerar como un paquete de nueva generación.
* Es extensible, portátil y de fácil mantenimiento.
```mermaid
graph TD
    A[Bit Component]
    C[Contenedor Desacoplado]
    D[Paquete de Próxima Generación]
    E[Extensible]
    F[Portátil]
    G[Fácil Mantenimiento]

    style A fill:green,stroke:#fff,stroke-width:2px,color:#fff;
    style C fill:magenta,stroke:#fff,stroke-width:2px,color:#fff;
    style D fill:orange,stroke:#fff,stroke-width:2px,color:#fff;
    style E fill:gray,stroke:#fff,stroke-width:2px,color:#fff;
    style F fill:red,stroke:#fff,stroke-width:2px,color:#fff;
    style G fill:black,stroke:#fff,stroke-width:2px,color:#fff;

    A --> C
    A --> D
    A --> E
    A --> F
    A --> G

```

### 3- La gente suele utilizar Bit para ejecutar una arquitectura: 
* Monorepo
* Polyrepo o Microrepo
* Distribuida o Microfrontend


### 4- Bit está diseñado para una adopción incremental 
* Adopción incremental y se puede agregar a la mayoría de las bases de código en pocos minutos.

### 5- Bit nos abstrae del framework, empaquetador y administrador de paquetes.
* Bit nos abstrae del framework, empaquetador y administrador de paquetes lo que significa que puedes usarlo con cualquier marco de framework o librería, proporcionando plantillas para los marcos más populares y una CLI para los comando más comunes.

# Herramientas que soporta Bit.dev
<img src="https://static.bit.dev/extensions-icons/react.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/angular.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/typescript.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/vue.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/vite.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/webpack.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/nodejs.svg" alt="Descripción de la imagen" width="100"/>
<br>
<img src="https://storage.googleapis.com/static.bit.dev/extensions-icons/stencil2.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/vtest.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/mocha.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/playwright.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/nextjs2.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/cypress2.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/express2.svg" alt="Descripción de la imagen" width="100"/>
<br>
<img src="https://static.bit.dev/extensions-icons/lit.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/babel.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/eslint.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/prettier.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/Jest.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/storybook.svg" alt="Descripción de la imagen" width="100"/>
<img src="https://static.bit.dev/extensions-icons/esbuild.svg" alt="Descripción de la imagen" width="100"/>


# Ventajas de Bit.dev

```mermaid
flowchart TB
   %% Colors %%
    classDef blue fill:#2374f7,stroke:#000,stroke-width:2px,color:#fff
    classDef orange fill:#fc822b, stroke:#000, stroke-width:2px, color:#fff
    classDef green fill:#16b552, stroke:#000, stroke-width:2px, color:#fff
    classDef red fill:#ed2633, stroke:#000, stroke-width:2px, color:#fff
    classDef magenta fill:magenta, stroke:#000, stroke-width:2px, color:#fff
    classDef gray fill:gray, stroke:#000, stroke-width:2px, color:#fff
    classDef yellow fill:yellow, stroke:#000, stroke-width:2px, color:#000

    %% Nodos %%
    Dev(Developer):::blue
    BL{{Bit.dev - LOCAL}}:::orange
    BC{{Bit.dev - CLOUD}}:::magenta
    G{{Github}}:::gray

    Dev ---> BL
    Dev ---> BC
    Dev ---> G
%%    BL -..-> BC

    BL --"Levantar en local"-->
                                PL(Bit Platform Local) -..-> DocPL(Ver Documentación):::green
                                PL                     -..-> ComPL(Ver Componentes):::green
                                PL                     -..-> InsPL(Instalar Componentes):::green
                                PL                     -..-> PLT(Tecnologias):::green
                                                             PLT                    -..-> VitePL(Vite):::green
                                                             PLT                    -..-> PnpmPL(pnpm):::green
                                                             PLT                    -..-> CLIPL(CLI):::green

                                                             
                                PL                     -..-> TiposPL(Tipos)
                                                             TiposPL -..-> VarComPL(Aplicaciones):::orange-..-> OrgBC(Organizaciones):::green
                                                             TiposPL -..-> MonComPL(Monorepos):::orange-..-> LibComPL(Librerias):::green
                                                                           MonComPL(Monorepos):::orange-..-> VarComPL(Aplicaciones):::orange
                                                                           MonComPL(Monorepos):::orange-..-> OrgBC(Organizaciones):::green
                                                             TiposPL -..-> LibComPL(Librerias):::green-..-> OrgBC(Organizaciones):::green
                                                             TiposPL -..-x MicrofComPL(Microfontends):::red-..-> OrgBC(Organizaciones):::green
                                                                           MicrofComPL(Microfontends):::red-..-> VarComPL(Aplicaciones):::orange
                                                             
                                                             
                                
                                
    BC --"Corre cuando se exporta, se pudiera usar desde el CI/CD "--> 
                                      PC(Bit Platform Cloud) -..-> ComBC(Ver Componentes):::green
                                      PC                     -..-> DocBC(Ver Documentación):::green
                                      PC                     -..-> OrgBC(Organizaciones):::green --"Tiene uno o mas"--> ScopBC(Scopes):::green
                                      PC                     -..-> Ci(Ripple CI) -..-> BB(Build)
                                                                   Ci -..-> TBC(Test)
                                                                   Ci -..-> LBC(Linter)

    G --"Intergración y deploy continuo"-->  GA(Github Actions CI/CD)
                                             GA -..-> Test(CI/Test)
                                             GA -..-> Lint(CI/Linter)
                                             GA -..-> Export(CI/Export to bit.cloud):::green -..-> BC
                                             GA -..-> Dep(CD/Deploy)
```

# CLI de Bit.dev
```mermaid
flowchart TB
   %% Colors %%
    classDef blue fill:#2374f7,stroke:#000,stroke-width:2px,color:#fff
    classDef orange fill:#fc822b, stroke:#000, stroke-width:2px, color:#fff
    classDef green fill:#16b552, stroke:#000, stroke-width:2px, color:#fff
    classDef red fill:#ed2633, stroke:#000, stroke-width:2px, color:#fff
    classDef magenta fill:magenta, stroke:#000, stroke-width:2px, color:#fff
    classDef gray fill:gray, stroke:#000, stroke-width:2px, color:#fff
    classDef yellow fill:yellow, stroke:#000, stroke-width:2px, color:#000

    %% Nodos %%
    Dev(Developer):::blue
    BL{{Bit.dev - LOCAL}}:::orange
    BC{{Bit.dev - CLOUD}}:::magenta
    G{{Github}}:::gray

    Dev ---> BL
    Dev ---> BC
    Dev ---> G
    BL --"Levantar en local"-->
                                PL(Bit Platform Local) -..-> DocPL(Ver Documentación)
                                PL                     -..-> ComPL(Ver Componentes)
                                PL                     -..-> InsPL(Instalar Componentes)
                                PL                     -..-> PLT(Tecnologias):::green
                                PLT                    -..-> VitePL(Vite)
                                PLT                    -..-> PnpmPL(pnpm)
                                PLT                    -..-> CLIPL(CLI):::green
CLIPL                    --"Construir la app"--> BUILDPL(bit build):::green
CLIPL                    --"Ver componentes de la app"--> STATUSDPL(bit status):::green
CLIPL                    --"Versionar la app"--> TAGPL(bit tag):::green
CLIPL                    --"Exportar la app a cloud"--> EXPORTPL(bit export):::green
CLIPL                    --"Importar componentes"--> IMPORTPL(bit import):::green
CLIPL                    --"Instalar librerias"--> INSTALLPL(bit install):::green
CLIPL                    --"Logearte para tener permisos"--> LOGINPL(bit login):::green
CLIPL                    --"Salir"--> LOGOUTPL(bit logout):::green
CLIPL                    --"Correr los test"--> TESTPL(bit test):::green
CLIPL                    --"Correr el linter"--> LINTERPL(bit lint):::green
CLIPL                    --"Levantar Bit.Dev - LOCAL"--> BITDEVLOCALPL(bit start):::green
```
# Flujo de trabajo de Bit.cloud
```mermaid
sequenceDiagram
    Developer(Local)->>+Bit.dev(Local): (1) Correr y ver los cambios en vivo (bit start)
    Developer(Local)-->>+Developer(Local): (2)Desarrollar
    Developer(Local)->>+Github: (3) Hacer y subir cambios (git push)
    Github->>+Github: Correr CI/CD
    Github-->>-Bit.cloud: Exportar componentes (bit export)
    Bit.cloud-->>+Bit.cloud: Correr Ripple CI
    Bit.cloud-->>-Bit.cloud: Publicar componentes
    Developer(Local)->>+Bit.cloud: (4)Ver el componente y la documentación en vivo
    Developer(Local)->>+Bit.cloud: (5)Importar componente
    Bit.cloud-->>+Developer(Local): Descargar componente
    Developer(Local)-->>+Developer(Local): (6)Instalar dependencias (bit install @org/scope.name)
   
```
