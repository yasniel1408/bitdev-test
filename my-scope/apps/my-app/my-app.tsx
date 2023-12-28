import { Routes, Route } from 'react-router-dom';
import {Footer} from '@my-scope/components.footer';
import {Banner} from '@my-scope/components.banner';
import {Button} from '@my-scope/components.button';
import {Layout} from '@my-scope/components.layout';
import {HelloWorld} from '@test-organization-bit/my-scope.hello-world';
import {HelloWorld2} from '@test-organization-bit/my-scope2.hello-world2';


export function MyApp() {
  console.log({process})
  const t = process.env.REACT_APP_TEXT

  return (
    <Routes>
      <Route path="/"
      element={
      <>
        <HelloWorld>HOLA Libreria scope 1</HelloWorld>
        <HelloWorld2>HOLA  Libreria scope 2</HelloWorld2>
        <Banner/>
        <Button/>
        <Layout>
          <h1>Aqui va el contenido de la página</h1>
        </Layout>
        <p>AQUI: {t}</p>
        <Footer/>
      </>
    } />
    </Routes>
  );
}
