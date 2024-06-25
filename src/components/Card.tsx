import Link from "next/link"

export default function Card(props: any) {
    return (
        <Link href={`/about/${props.id}`}>
            <div className="rounded-md shadow-md grid-rows size-64 ">
                <div className="bg-black rounded-md h-3/6">
                    <img src={props.image} alt={props.title} className="h-full w-full object-cover rounded-t-md" />

                </div>
                <div className=" w-full h-1/6 font-bold text-center text-md truncate text-ellipsis p-2">{props.title}</div>
                <div className=" w-full h-1/6 text-sm p-2 truncate text-ellipsis">{props.description}</div>
                <div className=" w-full h-1/6 text-sm p-2 truncate text-ellipsis text-right font-bold text-slate-700">{`${props.price} $`}</div>
            </div>
        </Link>
    )
}