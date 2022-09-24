import {
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
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center 
        text-sm font-semibold font-sans h-auto">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />

            </div>
            <Image
                className="object-contain"
                src={HuluLogo}
                width={80}
                height={40}
            />

        </header>
    )
}

export default Header;


