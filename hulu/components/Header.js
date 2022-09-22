import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

import Image from "next/image";
import HuluLogo from '../assets/Hulu_2017.svg'
import HeaderItem from "./HeaderItem";


function Header() {
    return (
        <header className="">
            <div>
                <HeaderItem  title ='HOME' Icon={HomeIcon}/>
            </div>
            <Image
                className="object-contain"
                src={HuluLogo}
                width={200}
                height={100}
            />

        </header>
    )
}

export default Header;

