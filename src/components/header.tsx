export default function Header() {
    return(
        <header className=" bg-sky-500 text-sky-100 text-sm">
        <nav className="container mx-auto flex items-center justify-between py-4">
        <span className="text-xl text-white">Logo</span>
        <ul className="flex gap-3">
            <li>
                <a className="px-3 py-2" href="">Menu 1</a>
            </li>
            <li>
                <a href="">Menu 2</a>
            </li>
        </ul>
        </nav>
    </header>
    )
}