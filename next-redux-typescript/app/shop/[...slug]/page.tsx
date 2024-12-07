import { use } from "react";

export default function ShopPage({ params }: { params: Promise<{ slug: string }> })
{
    const {slug} = use(params);
    console.log('Slug ',slug);
    return (<div>
        Shop page
    </div>);
}