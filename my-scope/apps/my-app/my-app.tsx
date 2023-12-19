import { Routes, Route } from 'react-router-dom';
import {Footer} from '@my-scope/mfes.footer';
import {Banner} from '@my-scope/mfes.banner';
import {Button} from '@my-scope/mfes.button';


export function MyApp() {
  return (
    <Routes>
      <Route path="/"
      element={
      <>
        <Banner/>
        <h1>Aqui va el contenido de la página</h1>
        <Button/>
        <Footer/>
      </>
    } />
    </Routes>
  );
}