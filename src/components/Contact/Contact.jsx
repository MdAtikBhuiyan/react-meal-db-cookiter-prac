

const Contact = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                    <h2 className="mb-6 text-3xl font-bold text-[#85b72c]">Contact us</h2>
                    <p className="mb-6 text-[#777676]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium, modi accusantium ipsum corporis quia asperiores
                        dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                        autem omnis fugiat perspiciatis? Ad, veritatis.
                    </p>
                    <p className="mb-2 text-[#777676] ">
                        Dhaka, Bangladesh
                    </p>
                    <p className="mb-2 text-[#777676]">
                        +8801777777777
                    </p>
                    <p className="mb-2 text-[#777676]">
                        ab.atikbhuiyan@gmail.com
                    </p>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                    <form>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="text"
                                className="input input-bordered border-[#85b72c] w-full" placeholder="Name" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="email"
                                className="input input-bordered border-[#85b72c] w-full" placeholder="Email" />
                        </div>

                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <textarea
                                className="textarea border-[#85b72c] w-full" rows="4" placeholder="Your message"></textarea>

                        </div>

                        <button type="button"
                            className="mb-6 bg-[#85b72c] inline-block w-full rounded-md font-medium uppercase text-white py-2">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;