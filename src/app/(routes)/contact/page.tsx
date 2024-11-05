export default function Contact() {
    return (
        <div className="px-4 sm:px-8 lg:px-16 mt-8 sm:mt-14">
            <div className="flex justify-center">
                <div className="bg-purple-500 hover:bg-purple-300 px-6 sm:px-8 py-3 sm:py-4 mb-8 sm:mb-14 font-bold text-xl sm:text-2xl rounded-xl sm:rounded-2xl font-sans transition duration-200 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)]">
                    CONTACT US
                </div>
            </div>
            
            <div className="flex justify-center mb-16">
                <div className="p-6 sm:p-10 lg:p-12 bg-black border border-gray-300 transition-shadow duration-300 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)] max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-3xl">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-purple-500 to-purple-50">
                            Lets Build Something <br />
                            <span className="block">Great Together</span>
                        </h1>
                    </div>
                    
                    <div className="flex justify-center mt-4 sm:mt-6">
                        <p className="text-center max-w-md sm:max-w-lg text-gray-400 font-sans text-sm sm:text-base lg:text-lg">
                            I would love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out. I am always open to discussing new opportunities, collaborations, or even sharing insights about front-end development. Lets create something amazing together!
                        </p>
                    </div>
                    
                    <div className="flex justify-center items-center mt-10 sm:mt-16">
                        <form className="space-y-6 sm:space-y-8 text-center w-full max-w-lg">
                            <div className="flex flex-col sm:flex-row sm:space-x-3 justify-center">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full sm:w-auto mb-4 sm:mb-0 px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full sm:w-auto px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:space-x-3 justify-center">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full sm:w-auto mb-4 sm:mb-0 px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full sm:w-auto px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <textarea
                                placeholder="Share your vision and requirements"
                                className="w-full h-28 px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            ></textarea>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="mt-8 sm:mt-10 bg-purple-500 hover:bg-purple-300 px-6 sm:px-9 py-3 font-bold text-lg sm:text-2xl rounded-full font-sans transition duration-200 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)]"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}