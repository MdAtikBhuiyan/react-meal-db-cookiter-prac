import { NavLink, useLoaderData } from "react-router-dom";

const HomeMeal = () => {

    const meals = useLoaderData();
    // console.log(meals)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">

            {
                meals.categories.map(meal => (

                    <div key={meal.idCategory} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={meal.strCategoryThumb} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{meal.strCategory}</h2>
                            <p className="text-ellipsis">{meal.strCategoryDescription.slice(0, 90)}</p>
                            <div className="card-actions mt-4">
                                <NavLink to={`meal/${meal.strCategory}`}>
                                    <button className="btn btn-primary">{meal.strCategory} Details</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default HomeMeal;