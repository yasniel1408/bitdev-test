// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Footer } from "./footer";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Footer />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Footer />
//   </BrowserRouter>
// );