import React, { Suspense } from "react";
import Profile from "./Profile";
import Link from "next/link";
import Logo from '../public/logo.png';
import Image from "next/image";


export default function Navbar() {

	return (
		<div className="flex justify-between items-center h-20">
			<Link href="/">
				<Image src={Logo} alt="image uploader logo" className="max-w-[200px] object-cover" />
			</Link>
			<Suspense>
				<Profile />
			</Suspense>
		</div>
	);

};
