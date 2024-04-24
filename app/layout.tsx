import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://supaimgupload.vercel.app/"),
	title:{
		template: "%s | Uploader",
		default: "Image Uploader",
	},
	authors: {
		name: "Jannick Pedersen",
	},
	description: "Explore a world of captivating stories and insightful articles on our blog. the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
	openGraph: {
		title: "Image Uploader",
		url:process.env.SITE_URL,
		siteName: "Image Uploader",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Uploader", "Image Uploader", "Uploading images", "Jannick Pedersen", "Online images", "Uploader app"],
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<main className="max-w-6xl min-h-screen mx-auto py-10 space-y-10 px-5 xl:px-0">
							<Navbar />
							<Suspense>
								{children}
							</Suspense>
						</main>
						<Toaster />
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
