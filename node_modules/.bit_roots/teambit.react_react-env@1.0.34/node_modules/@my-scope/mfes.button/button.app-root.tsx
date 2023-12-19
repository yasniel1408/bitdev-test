// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Button } from "./button";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Button />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Button />
//   </BrowserRouter>
// );