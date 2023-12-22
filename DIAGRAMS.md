# Que es Bit.dev? ![./bitdev.png](https://avatars.githubusercontent.com/u/24789812?s=50&v=4)

![./bitdev.png](https://static.bit.dev/brands/logo-typescript.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-jest.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-eslint.svg)
![./bitdev.png](https://static.bit.dev/brands/logo-prettier.svg)
![./bitdev.png](https://static.bit.dev/extensions-icons/typescript.svg)


### 1- Bit es un sistema de compilación para software componible. 
* Hace que la composición de aplicaciones a partir de componentes con versiones independientes sea fluida y rápida.

### 2- La principal innovación de Bit es Bit Component 
* Un contenedor para componentes de software componibles completamente desacoplado. 
* Puedes considerarlo como un paquete de próxima generación. 
* Es extensible, portátil y de fácil mantenimiento.

### 3- La gente suele utilizar Bit para ejecutar una arquitectura: 
* Monorepo
* Polyrepo o Microrepo
* Distribuida

### 4- Bit está diseñado para una adopción incremental 
* Adopción incremental y se puede agregar a la mayoría de las bases de código en pocos minutos.

### 5- Bit es agnóstico del framework, empaquetador y administrador de paquetes.
* Bit es agnóstico del framework, empaquetador y administrador de paquetes lo que significa que puedes usarlo con cualquier marco de framework o librería.

# Herramientas que soporta Bit.dev
<img src="https://static.bit.dev/extensions-icons/react.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/angular.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/typescript.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/vue.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/vite.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/webpack.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/nodejs.svg" alt="Descripción de la imagen" width="50"/>
<br>
<img src="https://storage.googleapis.com/static.bit.dev/extensions-icons/stencil2.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/vtest.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/mocha.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/playwright.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/nextjs2.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/cypress2.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/express2.svg" alt="Descripción de la imagen" width="50"/>
<br>
<img src="https://static.bit.dev/extensions-icons/lit.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/babel.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/eslint.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/prettier.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/Jest.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/storybook.svg" alt="Descripción de la imagen" width="50"/>
<img src="https://static.bit.dev/extensions-icons/esbuild.svg" alt="Descripción de la imagen" width="50"/>


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
