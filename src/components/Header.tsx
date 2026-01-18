import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50 md:bg-main/50 text-white">
            <nav className="hidden md:flex container mx-auto justify-center items-center w-full px-4 md:px-0">
                <ul className="flex gap-6 items-center">
                    <li>
                        <a href="#" className="hover:opacity-80 transition duration-300">トップ</a>
                    </li>
                    <li>
                        <a href="#message" className="hover:opacity-80 transition duration-300">メッセージ</a>
                    </li>
                    <li>
                        <a href="#program" className="hover:opacity-80 transition duration-300">プログラム</a>
                    </li>
                    <li>
                        <a href="#detail" className="hover:opacity-80 transition duration-300">詳細</a>
                    </li>
                    <li>
                        <a href="#review" className="hover:opacity-80 transition duration-300">お客様の声</a>
                    </li>
                    <li>
                        <a href="#owner" className="hover:opacity-80 transition duration-300">講師紹介</a>
                    </li>
                    <li>
                        <Button className="px-8 py-6 bg-main text-main-cont rounded-none text-xl hover:bg-main/80" asChild>
                            <a href="#apply">申し込み</a>
                        </Button>
                    </li>
                </ul>
            </nav>
            {!isOpen && (
                <div className="md:hidden w-max ml-auto bg-main/50 p-2">
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </button>
                </div>
            )}
            <div className={cn("md:hidden fixed top-0 right-0 w-max h-screen bg-main z-50 p-4 transition", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="absolute top-4 right-4">
                    <button className="text-white" onClick={() => setIsOpen(false)}>
                        <span className="sr-only">Close menu</span>
                        &times;
                    </button>
                </div>
                <nav>
                    <div className="flex flex-col items-center justify-center h-full">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <a href="#" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>トップ</a>
                            </li>
                            <li>
                                <a href="#message" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>メッセージ</a>
                            </li>
                            <li>
                                <a href="#program" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>プログラム</a>
                            </li>
                            <li>
                                <a href="#detail" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>詳細</a>
                            </li>
                            <li>
                                <a href="#review" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>お客様の声</a>
                            </li>
                            <li>
                                <a href="#owner" className="hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>講師紹介</a>
                            </li>
                            <li>
                                <Button className="px-8 py-6 bg-accent text-accent-cont rounded-none text-xl hover:bg-accent/80" asChild>
                                    <a href="#apply" onClick={() => setIsOpen(false)}>申し込み</a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header