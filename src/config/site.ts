import { Layout } from 'fire-ng/lib/interfaces/layout';
import { FooterLink } from 'fire-ng/lib/interfaces/footer-link';

export const site = {
    logo: "https://blazed.sirv.com/logo/BLZ-blue.png",
    nav: [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "Services",
            link: "/services"
        },
        {
            text: "Products",
            link: "/products"
        },
        {
            text: "Companies",
            link: "/companies"
        }
    ],
    burgerVisible: false,
    footerLinks: [
        {
            header: "Company",
            body: [
                {
                    text: "Home",
                    link: "/home"
                },
                {
                    text: "Services",
                    link: "/services"
                },
                {
                    text: "Products",
                    link: "/products"
                },
                {
                    text: "Companies",
                    link: "/companies"
                }
            ]
        },
        {
            header: "Platforms",
            body: [
                {
                    text: "Gaming",
                    link: "https://blazed.games/"
                },
                {
                    text: "Media",
                    link: "https://blz.one/"
                },
                {
                    text: "World",
                    link: "https://blazed.world/"
                },
                {
                    text: "Software",
                    link: "https://blazed.software/"
                }
            ]
        },
        {
            header: "Services",
            body: [
                {
                    text: "Development",
                    link: "https://blazed.systems/"
                },
                {
                    text: "Marketing",
                    link: "https://beez.top/"
                },
                {
                    text: "Publishing",
                    link: "https://blazed.xyz/"
                },
                {
                    text: "Telecom",
                    link: "https://blazed.tel/"
                }
            ]
        }
    ]
} as Layout;