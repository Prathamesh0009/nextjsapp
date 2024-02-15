import Link from "next/link";

const Links =() =>{
    const links = [
        {
            title: "HOMEPAGE",
            path: "/",
        },
        {
            title: "ABOUT",
            path: "/about",
        },{
            title: "CONTACT",
            path: "/contact",
        },
        {
            title: "BLOG",
            path: "/blog",
        },
    ];
    return (
        <div>
           {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
           )))}
        </div>
    )
}

export default Links;