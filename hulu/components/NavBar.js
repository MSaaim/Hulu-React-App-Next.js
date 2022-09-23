import requests from "../utils/requests"

function NavBar() {
    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-sky-300 " > {title} </h2>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;