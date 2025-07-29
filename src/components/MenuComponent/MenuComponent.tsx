import Link from "next/link";
import "./MenuComponent.css"
import {FC} from "react";
import {MenuProps} from "@/types/OptionType";


const MenuComponent:FC<MenuProps> = ({showMenu}) => {
    if (showMenu) {
        return (
            <div className="menu">
                <Link href="/users">All Users</Link>
                <Link href="/posts">All Posts</Link>
                <Link href="/comments">All Comments</Link>
            </div>
        );
    }
    else return(<div className="menu"><Link href="/">Home</Link></div>)
};

export default MenuComponent;