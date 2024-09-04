import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("post");
	return rss({
		title: "Asad",
		description: "Asad Blog",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.dateFormatted,
			description: post.data.description,
			customData: post.data.customData,
			// Compute RSS link from post `slug`
			// This example assumes all posts are rendered as `/post/[slug]` routes
			link: `/post/${post.slug}/`,
		})),
	});
}
