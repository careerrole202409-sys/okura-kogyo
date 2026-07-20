import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import {
  displayFilmCategory,
  foodFilmCategory,
  liquidFilmCategory,
  selfAdhesiveProtectionCategory,
  carCategory,
} from './data/categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products/use/display-film/" replace />,
      },
      {
        path: 'products/use/display-film/',
        element: <CategoryPage category={displayFilmCategory} />,
      },
      {
        path: 'products/use/food-film/',
        element: <CategoryPage category={foodFilmCategory} />,
      },
      {
        path: 'products/use/liquid-film/',
        element: <CategoryPage category={liquidFilmCategory} />,
      },
      {
        path: 'products/use/self-adhesive-protection/',
        element: <CategoryPage category={selfAdhesiveProtectionCategory} />,
      },
      {
        path: 'products/use/car/',
        element: <CategoryPage category={carCategory} />,
      },
      {
        path: 'products/:id/',
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
