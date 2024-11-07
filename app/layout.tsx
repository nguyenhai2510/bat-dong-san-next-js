import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import DefaultLayout from "@/defaultLayout";
import Link from "next/link";
import Image from "next/image";
import images from "@/assets/images";

// Khai báo các font
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Metadata cho trang
export const metadata: Metadata = {
    title: "Bất động sản",
    description: "Bất động sản",
    keywords: "bất động sản, nhà đất, mua bán nhà đất, đầu tư bất động sản",
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: "https://nguyenhai2510.id.vn/",
        title: "Bất động sản",
        description: "Bất động sản",
        images: [
            {
                url: "/images/bds-ha-noi-17080891791471270135244.jpg",
                width: 800,
                height: 600,
                alt: "Hình ảnh bất động sản"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bất động sản",
        description: "Bất động sản",
        images: [
            "/images/bds-ha-noi-17080891791471270135244.jpg",
        ]
    }
};

// Root layout component với thẻ <html> và <body>
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="mdl-js">

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <DefaultLayout>
            {children}
        </DefaultLayout>

        <div className="fixed z-40 right-6 bottom-20">
            <Link href={''}>
                <Image src={images.icon_facebook} alt=""
                       className="size-[40px]  rounded-full object-cover"/>
            </Link>
            <Link href={''}>
                <Image src={images.icon_zalo} alt=""
                       className="size-[40px] rounded-full object-cover mt-3"/>
            </Link>
        </div>
        </body>
        </html>
    );
}
