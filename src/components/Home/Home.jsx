import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation();

    return (
        <div>

            {/* navbar */}
            <div className="bg-slate-100 fixed w-full z-10">
                <Header />
            </div>

            {/* bg img on header */}
            <div className={'bg-[url("/src/assets/images/home-banner.jpg")] bg-no-repeat bg-center bg-cover h-[95vh] bg-fixed'}>
                <div className="w-full h-full bg-[#7484c733] flex flex-col justify-center items-center gap-8 text-center">
                    <h2 className="text-2xl font-bold md:text-6xl">Cooking Never Got Any <br /> <span className="text-[#85b72c]">Easier</span></h2>
                    <p className="text-gray-800 text-lg font-medium">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. <br /> Pastrami pork picanha tongue venison strip steak</p>
                </div>
            </div>

            {/* changes route component */}
            <div className="w-[90%] mx-auto py-20">
                {
                    navigation.state === 'loading' ?
                        <div className="flex justify-center items-center">
                            <span className="loading loading-dots w-[60px]"></span>
                        </div>
                        : <Outlet />
                }
            </div>


            {/* footer */}
            <Footer />

        </div>
    );
};

export default Home;