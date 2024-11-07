import Header from "../components/Header";
import Footer from "../components/Footer";
import images from "../assets/images";
import Link from "next/link";
import Image from "next/image";
import {ReactNode} from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <div className="font-lexend">
            <Header/>
            {children}
            <div className="mt-5">
                <Footer/>
            </div>

        </div>
    );
};

export default DefaultLayout;