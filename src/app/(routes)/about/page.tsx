export default function About() {
    return (
        <main className="px-4 sm:px-8 lg:px-16 py-8 lg:py-16">
            <div className="flex justify-center">
                <div className="bg-purple-500 hover:bg-purple-300 px-6 sm:px-8 py-3 sm:py-4 mb-10 font-bold text-xl sm:text-2xl rounded-xl sm:rounded-2xl font-sans transition duration-300 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)]">
                    ABOUT ME
                </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-400 to-purple-50 text-center">
                Building Front-End Experiences <br />
                <span className="block">with Creativity and Passion</span>
            </h1>
            <div className="flex justify-center">
                <p className="text-center max-w-lg sm:max-w-xl lg:max-w-3xl text-gray-400 font-sans text-base sm:text-lg lg:text-xl leading-relaxed px-4">
                    As a front-end developer, my passion lies in transforming ideas into immersive digital experiences. With a deep appreciation for aesthetics and functionality, I bring creativity, precision, and a user-centered approach to every project. From responsive layouts to seamless interactions, I am dedicated to crafting interfaces that not only look great but also feel intuitive. My goal is to bridge the gap between design and technology, creating websites that leave a lasting impact on users.
                </p>
            </div>
        </main>
    );
}