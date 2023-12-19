import { MemoryRouter } from 'react-router-dom';
import { MyApp } from "./my-app";
    
export const MyAppBasic = () => {
  return (
    <MemoryRouter>
      <MyApp />
    </MemoryRouter>
  );
}