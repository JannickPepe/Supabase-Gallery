import React, { Suspense } from "react";
import Uploader from "@/components/Uploader";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";
import DeletePost from "@/components/DeletePost";


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
			<div>
				<h1 className="text-3xl text-center mb-10">Image Uploader</h1>
			</div>
			<div className="grid grid-cols-3 gap-8">
				{posts?.map((post) => {
					return <div key={post.id} className="rounded-md w-full space-y-6 relative">
						<div className="w-full h-96 relative rounded-md border">
							<Image src={imgUrlHost + post.image} alt={post.description || ""} fill className="rounded-md object-cover object-center" />
						</div>
						<h1>@{post.profiles?.display_name}</h1>
						<DeletePost post_by={post.post_by} image={post.image}/>
					</div>;
				})}
			</div>

			<Uploader />
		</div>
	);
}
