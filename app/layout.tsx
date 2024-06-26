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
	
	title:{
		template: "%s | Uploader",
		default: "Image Uploader",
	},
	
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
