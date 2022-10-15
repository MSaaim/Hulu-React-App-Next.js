import requests from "../utils/requests"
import { useRouter } from "next/router";

function NavBar() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 
            sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key}
                        onClick={() => router.push(`/?enre=${key}`)}
                        className="cursor-pointer transition duration-100 transform
                    hover:scale-125 hover:text-white active:text-[#34c09c] last:pr-24 " > {title} </h2>
                ))}
            </div>
            <divc className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    );
}

export default NavBar;