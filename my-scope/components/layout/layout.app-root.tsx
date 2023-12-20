// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Layout } from "./layout";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Layout />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Layout />
//   </BrowserRouter>
// );