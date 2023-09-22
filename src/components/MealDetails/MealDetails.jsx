import { NavLink, useLoaderData, useLocation, useParams } from "react-router-dom";


const MealDetails = () => {
    const meals = useLoaderData();
    const paramsName = useParams();
    // console.log(meals, paramsName)
    const prevLocation = useLocation();
    // console.log('location', prevLocation)
    return (
        <div>
            <h3 className="text-6xl font-bold text-center text-[#85b72c] italic">{paramsName.mealName} Menu</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10">

                {
                    meals.meals.map(meal => (
                        <div key={meal.idMeal} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={meal.strMealThumb} alt="Shoes" className="rounded-xl w-full" />
                            </figure>
                            <div className="flex flex-col mt-6 items-center text-center">
                                <h2 className="card-title">{meal.strMeal}</h2>
                                <div className="card-actions my-6">
                                    <NavLink
                                        to={`${prevLocation.pathname}/${meal.idMeal}`}>
                                        <button className="btn btn-primary">Item Details</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MealDetails;