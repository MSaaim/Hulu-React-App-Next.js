import Image from "next/image";

function Header() {
    return (
        <header className="">
            <h1>The stupid header</h1>

            <Image
                className="object-contain"
                src="/assets\Hulu_2017.svg"
                width={200}
                height={100}
            />

        </header>
    )
}

export default Header;

