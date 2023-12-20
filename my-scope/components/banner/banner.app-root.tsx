// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Banner } from "./banner";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Banner />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Banner />
//   </BrowserRouter>
// );