"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useSearchParams } from "next/navigation";
import { SlCloudUpload } from "react-icons/sl";
import { FaImage, FaLocationDot, FaSquareGithub, FaSquareYoutube } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { IoMail } from "react-icons/io5";
import ShuffleHero from '../../components/ShuffleHero';
import Image from "next/image";
import DashboardImg from '../../public/dashboard.png';
import UploaderImg from '../../public/uploader.png'


export default function Page() {

	const params = useSearchParams();

	const next = params.get("next") || "";

	const handleLoginWithOAuth = (provider: "github" | "google") => {
		const supabase = supabaseBrowser();
		supabase.auth.signInWithOAuth({
			provider,
			options: {
				redirectTo: location.origin + "/auth/callback?next=" + next,
			},
		});
	};

	return (
		<Suspense>
			<span className="flex items-center justify-center mt-8">
				<div className="relative">
					<span className="bg-indigo-500 py-1 px-2.5 rounded-lg text-sm">Beta</span>
					<div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-purple-300 animate-ping"></div>
					<div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-purple-300"></div>
				</div>
			</span>

			<div className="space-y-3">
				<h1 className="text-4xl text-center  mt-[-30px]">Your own Storage with <span className="text-indigo-500">Image Uploader</span></h1>
				<h2 className="mx-auto text-2xl text-center max-w-[600px]">At <span className="text-indigo-500">Image Uploader</span> you can save all your favorites images or memes <span className="border-b-2 border-violet-600">without any limits</span></h2>
			</div>

			<div className="flex items-center justify-center w-full lg:h-[38vh] xl:h-[44vh]">
				<div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
					<div className="flex items-center gap-2">
						<KeyRound />
						<h1 className="text-2xl font-bold">Next + Supabase</h1>
					</div>

					<p className="text-sm text-gray-300">
						Register / Sign in Today 👇
					</p>
				
						<div className="flex flex-col gap-5">
								<Button
									className=" w-full flex items-center gap-2 "
									variant="outline"
									onClick={() => handleLoginWithOAuth("github")}
								>
									<FaGithub /> Github
								</Button>

								<Button
									className=" w-full flex items-center gap-2 "
									variant="outline"
									onClick={() => handleLoginWithOAuth("google")}
								>
									<FcGoogle /> Google
								</Button>
						
						</div>
					
					<div className="glowBox -z-10"></div>

				</div>
			</div>

			<div className="mt-20">
				<p className="text-center text-sm text-gray-500">Take advantage of Image Uploader with:</p>
				<h2 className="text-3xl text-center font-semibold">Features</h2>

				<section className="mt-6 max-w-[1000px] mx-auto">
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-slate-800 rounded-md border border-gray-500">
							<div className="px-2 md:px-0">
								<button className="animate-wave mt-2 sm:px-2 lg:px-6 sm:text-sm lg:text-2xl">👋</button>
							</div>
							<div className="lg:text-3xl mt-4 sm:px-2 lg:px-6 text-center lg:text-left">
								Hi, Im Jannick. I build cool projects like this one.
							</div>
							<div className="mt-6 px-2 lg:px-6 flex items-center hover:cursor-pointer text-indigo-400 hover:text-white">
								<div className="flex items-center hover:scale-110 transition-transform">
									<button className="text-sm lg:text-lg">Contact me</button> <MdOutlineKeyboardArrowRight size={30} />
								</div>
							</div>
						</div>

						<div className="">
							<div className="grid grid-cols-2 grid-rows-2 gap-4">
								<div className="bg-sky-500 flex justify-center py-8 rounded-md hover:rotate-2 hover:scale-105 transition-transform">
									<SlCloudUpload size={30} />
								</div>
								<div className="bg-purple-400 flex justify-center py-8 rounded-md hover:rotate-2 hover:scale-105 transition-transform">
									<FaImage size={30} />
								</div>
								<div className="bg-slate-500 flex justify-center py-8 rounded-md hover:rotate-2 hover:scale-105 transition-transform">
									<FaSquareGithub size={30} />
								</div>
								<div className="bg-red-400 flex justify-center py-8 rounded-md hover:rotate-2 hover:scale-105 transition-transform">
									<FaSquareYoutube size={30} />
								</div>
							</div>
						</div>

					</div>

					<div className="grid grid-cols-1 grid-rows-1 bg-slate-800 mt-4 px-6 py-4 rounded-md border border-white">
						<div className="text-2xl text-gray-400">
							<span className="text-white">My passion is building cool stuff.</span> I build primarily with React, Tailwind CSS, and Framer Motion. 
							I love this stack so much that I even built a website about it. Ive made over a hundred videos on the subject across YouTube and TikTok.
						</div>
					</div>

					<div className="grid grid-cols-3 mt-4 gap-4">
						<div className="col-span-1 bg-slate-500 rounded-md border border-gray-800">
							<div className="p-2 lg:p-4 mt-10 md:mt-3">
								<FaLocationDot className="mx-auto" size={20} />
								<p className="text-center mt-1">Image Uploader</p>
							</div>
						</div>
						<div className="col-span-2 bg-slate-800 rounded-md border-gray-500">
							<div className="text-lg px-4 py-1 mt-2">
								Join my mailing list
							</div>
							<div className="md:flex px-4 items-center gap-4 mb-4 mt-2">
								<Input className="border border-indigo-500"/>
								<Button className="bg-white mt-2 md:mt-0">
									<IoMail className="mr-1" size={20} /> Join The List
								</Button>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="text-center">
				<p className="text-sm text-gray-500 mt-32">How It Works</p>
				<h2 className="text-3xl font-semibold mb-4">Overview Of Dashboard & Uploader</h2>
				<div className="md:grid grid-cols-2 grid-rows-1 gap-4 max-w-[1068px] mx-auto space-y-4 md:space-y-0 mb-10">
					<Image className="md:grid col-span-1 border border-indigo-500 md:h-[20rem] rounded-md hover:shadow-lg hover:shadow-white" src={DashboardImg} alt="dashboard image" />
					<Image className="md:grid col-span-1 border border-indigo-500 md:h-[20rem] rounded-md hover:shadow-lg hover:shadow-white" src={UploaderImg} alt="uploader image" />
				</div>
			</div>

			<div className="">
				<ShuffleHero />
			</div>

		</Suspense>
		
	);
}
