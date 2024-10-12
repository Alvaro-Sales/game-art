import Link from "next/link"
import "../../app/globals.css"


export default function Card({imagem, title, description, link}){
    return(
        <>
            <div className="w-[350px] min-h-[470px] h-auto bg-[var(--card)] flex flex-col items-center justify-between rounded-3xl">
                {imagem && <div className="mb-5 h-[50%] w-full"> {imagem} </div>}

                <div className="flex flex-col items-center justify-center p-5 box-border h-[50%]">
                    {title && <h1 className="text-3xl mb-5 text-center"> {title} </h1>}

                    {description && <p className="text-base text-justify"> {description} </p>}

                    {link && <button className="mt-5 bg-[var(--orange)] px-5 py-2 rounded-xl hover:bg-[var(--orangeHover)] tracking-wider"> <Link href={link} target="_blank">Play the game</Link> </button>}
                </div>
            </div>
        </>
    )
}