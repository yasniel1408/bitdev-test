// import { Routes, Route } from 'react-router-dom';

export function Layout({children}:any) {
  return <div style={{margin:10, background:"gray", padding: 10}}>{children}</div>;
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<h1>Hello World!</h1>}></Route>
  //     </Routes>
  //   </>
  // );
}