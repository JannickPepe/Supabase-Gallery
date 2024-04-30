/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "lh3.googleusercontent.com",
				protocol: "https",
			},
			{
				hostname: "avatars.githubusercontent.com",
				protocol: "https",
			},
			{
				hostname: "emsafkujkclompputwpy.supabase.co",
				protocol: "https",
			},
			{
				hostname: "https://images.unsplash.com/",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
