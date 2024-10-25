import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Navbar = () => {
    const socials = [
        {
            label: 'GitHub',
            url: 'https://www.github.com/Anupam0-0',
            icon: SiGithub,
        },
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/anupam-choudhary-04',
            icon: SiLinkedin,
        },
        {
            label: 'Twitter',
            url: 'https://www.github.com/Anupam0-0',
            icon: SiX,
        },
    ];

    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className='text-3xl font-bold underline underline-effect-8 decoration-emerald-500 -rotate-2'>
                Solid-Train 👨🏻‍💻
            </h1>
            <div className='flex items-center gap-5'>
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <Link key={index} href={social.url} target='_blank' aria-label={social.label}>
                            <Icon className='display-none size-5 hover:scale-125 transition-all' />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
