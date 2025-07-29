import type {Metadata} from "next";
import IdPageComponent from "@/components/IdPageComponent/IdPageComponent";
import MenuComponent from "@/components/MenuComponent/MenuComponent";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default async function IdPage({ params }: { params: Promise<{ item: string, id:string }> }) {
    const { item, id } = await params;
    metadata.title = `${item + ` `+ id}`
    metadata.description = `${item}-page`
    return (
        <div>
            <MenuComponent showMenu={false}/>
            <IdPageComponent params={{item,id}}/>
        </div>
    );
}