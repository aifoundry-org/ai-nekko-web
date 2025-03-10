import NavBar from '../navbar/main';
import Announcement from './announcement';

export default function Header() {
    return (
        <header>
            <div className='flex flex-col w-full bg-black'>
                <Announcement />
                <NavBar />
            </div>
        </header>
    );
}
