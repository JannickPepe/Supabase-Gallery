import React, { Suspense } from "react";
import Uploader from "@/components/Uploader";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";
import DeletePost from "@/components/DeletePost";
import { MdDescription } from "react-icons/md";
import { FaUpload } from "react-icons/fa6";
import UploadDashboard from "@/components/UploadDashboard";


export default async function page() {

	const supabase = supabaseServer();

	const { data } = await supabase.from("posts").select("*, profiles(display_name)").order("created_at", {ascending: false});

	const imgUrlHost = 'https://emsafkujkclompputwpy.supabase.co/storage/v1/object/public/images/';

	const posts = data?.map((post) => {
		// spread post so you both get id and description
		return {
			image: `${post.post_by}/${post.id}/${post.name}`,
			...post,
		}
	});
	

	return (
		<div>
			<span className="flex items-center justify-center mb-2">
				<div className="relative">
					<span className="bg-indigo-500 py-1 px-2.5 rounded-lg">Beta</span>
					<div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-purple-300 animate-ping"></div>
					<div className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-purple-300"></div>
				</div>
			</span>

			<div className="flex items-center justify-center gap-3 mb-2">
				<FaUpload className="h-4 w-4 lg:h-7 lg:w-7"/>
				<h1 className="text-3xl">Image Uploader</h1>
			</div>

			<div className="flex justify-center mb-4">
				<h3 className="text-slate-500 font-medium">You can upload <span className="text-indigo-500 font-semibold">1 image</span> at time</h3>
			</div>

			<UploadDashboard />

			<div className="grid lg:grid-cols-3 gap-8">
				{posts?.map((post) => {
					return <div key={post.id} className="rounded-md w-full space-y-3 relative">
						<h1>@{post.profiles?.display_name}</h1>

						<div className="w-full h-96 relative rounded-md border">
							<Image src={imgUrlHost + post.image} alt={post.description || ""} fill className="rounded-md object-cover object-center" />
						</div>

						<span className="text-sm text-slate-500 font-medium">{new Date(post?.created_at || "").toDateString()}</span>

						<div className="flex items-center gap-1">
							<MdDescription className="hidden md:block" size={20}/>
							<h2 className="lg:border-b border-indigo-500">{post.description}</h2>
						</div>
						
						<DeletePost post_by={post.post_by} image={post.image}/>

						<hr className="lg:hidden" />
					</div>;
				})}
			</div>

			<Uploader />
		</div>
	);
}
