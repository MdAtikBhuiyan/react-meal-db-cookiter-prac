import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import HomeMeal from './components/HomeMeal/HomeMeal';
import MealDetails from './components/MealDetails/MealDetails';
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';
import AllMeals from './components/AllMeals/AllMeals';
import Contact from './components/Contact/Contact';


//same api data load for passing different path 
let mealCategory = async () => {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    return data;
  }
  catch (err) {
    console.log("Fetching Error", err)
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        //same api data load on different path 
        loader: async () => {
          try {
            const data = await mealCategory();
            return data;
          } catch (error) {
            console.error('Error loading data:', error);
            throw error; // Rethrow the error to handle it further up the chain
          }
        },
        element: <HomeMeal />
      },
      {
        path: '/meal/:mealName',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.mealName}`),
        element: <MealDetails />
      },
      {
        // same path different component
        path: '/meal/:mealName/:mealId',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: [
          <SingleMealDetails key='home-meal' />,
          // <About key='about' />
        ],
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/allMeals',
        //same api data load on different path 
        loader: async () => await mealCategory(),
        element: <AllMeals />
      }

    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
