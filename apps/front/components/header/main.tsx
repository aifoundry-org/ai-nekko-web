'use client'

import NavBar from '../navbar/main';
import Announcement from './announcement';

export default function Header({hideAnnouncement = false}) {
    return (
        <header>
            <div className='flex flex-col w-full bg-black'>
                {!hideAnnouncement && <Announcement />}
                <NavBar />
            </div>
        </header>
    );
}
