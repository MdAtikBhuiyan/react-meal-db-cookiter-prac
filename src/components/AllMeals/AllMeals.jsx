import { useLoaderData, useNavigate } from "react-router-dom";

const AllMeals = () => {
    const allCategory = useLoaderData();

    console.log(allCategory);

    const navigate = useNavigate();
    const handleClickOnCard = (id) => {
        navigate(`/meal/${id}`)
    }

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {
                allCategory.categories.map(meal => (
                    <div
                        onClick={() => handleClickOnCard(`${meal.strCategory}`)}
                        className="relative rounded-lg group" key={meal.idCategory}>

                        <div className="rounded-lg">
                            <img className="rounded-lg" src={meal.strCategoryThumb} alt="" />
                        </div>

                        <div className="absolute top-0 w-full h-full bg-[#6866661c] rounded-lg flex justify-center items-center">
                            {/* <h2>{meal.strCategory}</h2> */}
                        </div>
                        <div className="hidden absolute top-0 w-full h-0 bg-[#302e2ebb] rounded-lg group-hover:flex group-hover:h-full justify-center items-center">
                            <h2 className="text-3xl font-bold text-[#85b72c]">{meal.strCategory}</h2>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default AllMeals;