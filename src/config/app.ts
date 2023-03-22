import { Config } from 'fire-ng/lib/interfaces/config';

export const app = {
    title: "Blazed Space",
    email: "hello@blazed.space",
    phone: "18557882348",
    theme: "#18185c",
    company: "Blazed Labs LLC",
    icon: "https://blazed.sirv.com/logo/Beaker-Rainbow.png",
    dns: {
        preconnect: [
            "https://blazed.sirv.com/",
            "https://res.cloudinary.com/"
        ],
        prefetch: [
            "//res.cloudinary.com/",
            "//blazed.sirv.com/"
        ]
    },
    license: "https://res.cloudinary.com/blazed-space/raw/upload/v1637201502/txt/license.txt",
    author: "https://res.cloudinary.com/blazed-space/raw/upload/v1637200777/txt/humans.txt",
    browserconfig: "https://res.cloudinary.com/blazed-space/raw/upload/v1652469389/xml/browserconfig.xml",
    social: {
        twitter: {
            handle: "BlazedLabs",
            url: "https://twitter.com/BlazedLabs"
        },
        facebook: {
            app: "503698127531557",
            url: "https://www.facebook.com/blazedlabs"
        },
        linkedin: {
            url: "https://www.instagram.com/blazed_labs/"
        },
        instagram: {
            url: "https://www.instagram.com/blazed_labs/"
        }
    },
    image: "https://blazed.sirv.com/logo/Wallpaper-Beaker.png",
    description: "Blazed Labs: Our Solutions."
} as Config;