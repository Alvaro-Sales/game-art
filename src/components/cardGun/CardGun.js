import "../../app/globals.css"


export default function CardGun({imagem}){
    return(
        <>
            <div className="w-[400px] min-h-[470px] h-auto bg-[var(--card)] flex flex-col items-center justify-between rounded-3xl">
                {imagem && <div className="mb-5 h-[50%] w-full"> {imagem} </div>}

                <div className="containerInfo relative max-w-[400px] w-full mx-4 py-2 px-5">
                    <div className="skillBox w-full my-6 mx-0">
                        <span className="title block text-sm font-semibold text-white mb-1">Firing damage</span>

                        <div className="skillBar h-2 w-full bg-[var(--bgBar)] rounded-md">
                            <span className="skillPer relative block h-full w-[65%] rounded-md bg-[var(--orange)] z-10">
                                <span className="tooltip absolute right-[-14px] top-[-28px] text-[10px] font-medium text-white py-[2px] px-[6px] rounded-[3px] bg-[var(--orange)]">65%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skillBox w-full my-6 mx-0">
                        <span className="title block text-sm font-semibold text-white mb-1">Firing range</span>

                        <div className="skillBar h-2 w-full bg-[var(--bgBar)] rounded-md">
                            <span className="skillPer relative block h-full w-3/5 rounded-md bg-[var(--orange)] z-10">
                                <span className="tooltip absolute right-[-14px] top-[-28px] text-[10px] font-medium text-white py-[2px] px-[6px] rounded-[3px] bg-[var(--orange)]">60%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skillBox w-full my-6 mx-0">
                        <span className="title block text-sm font-semibold text-white mb-1">Firing speed</span>

                        <div className="skillBar h-2 w-full bg-[var(--bgBar)] rounded-md">
                            <span className="skillPer relative block h-full w-3/4 rounded-md bg-[var(--orange)] z-10">
                                <span className="tooltip absolute right-[-14px] top-[-28px] text-[10px] font-medium text-white py-[2px] px-[6px] rounded-[3px] bg-[var(--orange)]">75%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}