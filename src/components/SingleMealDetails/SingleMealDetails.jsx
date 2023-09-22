import { useLoaderData } from "react-router-dom";


const SingleMealDetails = () => {

    const meal = useLoaderData()
    const data = meal.meals[0];

    console.log(data)

    const ingridientArray = [];
    for (let i = 1; i <= 10; i++) {

        const ingridient = 'strIngredient' + i;

        if (data[ingridient]) {
            ingridientArray.push(<li key={i}>{data[ingridient]}</li>)
        }
    }

    return (
        <div>
            <div className="card md:flex-row bg-base-100 shadow-xl">
                <figure className="basis-2/5 "><img src={data.strMealThumb} alt="Movie" className="h-full w-full object-cover" /></figure>
                <div className="flex flex-col justify-around basis-3/5 p-10">
                    <h2 className="card-title">{data.strMeal}</h2>
                    <p className="text-ellipsis overflow-hidden">{data.strInstructions.slice(0, 300)}...</p>
                    <h4 className="text-xl font-semibold">Ingridients:</h4>
                    {
                        ingridientArray
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <a href={data.strYoutube && data.strYoutube} rel="noreferrer" target="_blank">
                                {
                                    data.strYoutube ? "Watch on youtube":"No Videos"
                                }
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMealDetails;