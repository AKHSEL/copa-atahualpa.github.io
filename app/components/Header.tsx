import React from 'react';

import { Logo } from './Logo';

const Header = () => {
return(
    <header className="bg-[#0D0C3C]">
                <div className="flex h-20 shrink-0 items-end md:h-20 p-1 w-4/5 mx-auto">
                <Logo />
                </div>
            </header>
)
};

export default Header;