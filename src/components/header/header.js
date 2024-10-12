import "../../app/globals.css"

export default function Header(){
    return(
        <>
            <div className="w-full h-[350px] bg-bgHeader bg-center bg-cover">
                <div className="filter bg-[var(--bgFilter)] w-full h-full flex flex-col items-center justify-center gap-y-3">
                    <h1 className="text-3xl text-center">Hi player welcome</h1>

                    <p className="text-base text-center max-w-[750px]">Are you ready for a world of adventure and lots of fun? Then come with us and start your journey!</p>
                </div>
            </div>
        </>
    )
}