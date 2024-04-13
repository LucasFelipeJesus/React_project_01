import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Ir para página Home</Link>
    </div>
  );
}
export default NotFound;