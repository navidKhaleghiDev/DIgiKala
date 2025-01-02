import { Button } from "../ui/Button/button"
import { Logo } from "../ui/icons/Logo"
import { Input } from "../ui/Input/input"

export const Navbar = () => {
    return (
        <nav className="w-full mx-auto">
            <section className="flex items-center justify-between px-4 bg-teal-200">
                <div className="flex items-center justify-center gap-5">
                    <Logo />
                    <Input />
                </div>
                <div className="flex items-center justify-center gap-6">
                    <Button></Button>
                    <Button />
                </div>
            </section>
        </nav>
    )
}
