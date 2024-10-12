import "../../app/globals.css"


export default function CardMask({imagem, name, invisible, speed, nightPower, death, ghost, scream, laser, teleport, flame, cosmic}){
    return(
        <>
            <div className="w-[400px] min-h-[470px] h-auto bg-[var(--card)] flex flex-col items-center justify-between rounded-3xl">
                {imagem && <div className="mb-5 h-[50%] w-full"> {imagem} </div>}

                {name && <h1 className="mb-5 w-full text-center text-3xl"> {name} </h1>}

                <div className="flex items-center justify-center mb-5 gap-2">
                    <span>Powers:</span>

                    {invisible && <span className="text-3xl text-[var(--orange)]" title="Invisibility"> {invisible} </span>}

                    {speed && <span className="text-3xl text-[var(--orange)]" title="Speed"> {speed} </span>}

                    {nightPower && <span className="text-3xl text-[var(--orange)]" title="Night power"> {nightPower} </span>}

                    {death && <span className="text-3xl text-[var(--orange)]" title="Power of the death gaze"> {death} </span>}

                    {ghost && <span className="text-3xl text-[var(--orange)]" title="Resurrection power"> {ghost} </span>}

                    {scream && <span className="text-3xl text-[var(--orange)]" title="Power of the scream"> {scream} </span>}

                    {laser && <span className="text-3xl text-[var(--orange)]" title="Power of the laser"> {laser} </span>}

                    {teleport && <span className="text-3xl text-[var(--orange)]" title="Power of the teleport"> {teleport} </span>}

                    {flame && <span className="text-3xl text-[var(--orange)]" title="Power of the eternal flame"> {flame} </span>}

                    {cosmic && <span className="text-3xl text-[var(--orange)]" title="Power cosmic"> {cosmic} </span>}
                </div>
            </div>
        </>
    )
}