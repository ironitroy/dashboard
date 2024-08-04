import { Product } from "@/app/lib/models";
import { connectToDB } from "@/app/lib/utils";

export async function GET(req) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q') || '';
    const page = parseInt(url.searchParams.get('page'), 10) || 1;
    const category = url.searchParams.get('category') || '';

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 8;

    try {
        await connectToDB();
        const filter = {
            $or: [
                { name: { $regex: regex } },
                // { price: { $regex: regex } },
                { category: { $regex: regex } },
                { description: { $regex: regex } },
            ],
        };
        if (category) {
            filter.category = category;
        }
        // if (state) {
        //     filter.state = state;
        // }
        const count = await Product.find(filter).count();
        const products = await Product.find(filter).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return new Response(JSON.stringify({ count, products }), { status: 200 });
    } catch (err) {
        console.log("Error fetching products:", err);
        return new Response(JSON.stringify({ message: "Failed to fetch Products!" }), { status: 500 });
    }
}


