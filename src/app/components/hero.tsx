import Image from "next/image";

export default function Hero() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 m-8 lg:m-32 gap-12 lg:gap-32 justify-center lg:pl-44 p-4">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl mb-4 font-semibold font-sans text-gray-300">
                    Hi! I am Maryam
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-300 to-purple-100">
                    Frontend Web Developer
                </h2>
                <p className="text-gray-300 font-sans lg:line-clamp-none max-w-md mx-auto lg:mx-0">
                    I am passionate about crafting intuitive, responsive user experiences that bring designs to life. My focus is on creating visually appealing, functional interfaces, staying updated with evolving web technologies, and delivering impactful web solutions. From perfecting details to optimizing performance, I aim to make every interaction smooth and meaningful.
                </p>
            </div>
            <div className="hidden lg:flex justify-center ">
                <Image 
                    src="/image.jpeg" 
                    height={250} 
                    width={250} 
                    alt="image" 
                    className="rounded-full"
                />
            </div>
        </main>
    );
}