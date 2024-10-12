'use client'
import "../../globals.css"
import Image from "next/image"
import { TbGhost2Filled } from "react-icons/tb"
import { RiSpeedMiniFill } from "react-icons/ri"
import { AiFillEyeInvisible } from "react-icons/ai"
import { GiStarSwirl, GiFire, GiTeleport, GiLaserPrecision, GiTerror, GiDeathNote, GiMidnightClaw } from "react-icons/gi"
import CardMask from "../../../components/cardMask/cardMask"

export default function Home() {
	return(
		<>
			<main className="w-full max-w-[2000px] h-auto pl-[90px] p-5 flex flex-col items-center justify-center">
				<h1 className="text-3xl my-7">Your Masks</h1>

				<div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
					<CardMask 
						imagem={
							<Image
								src="/images/mask-1.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Cat mask"
                            speed={<RiSpeedMiniFill />}
                            nightPower={<GiMidnightClaw />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/mask-2.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Iron mask"
                            laser={<GiLaserPrecision />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/mask-3.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Death mask"
                            death={<GiDeathNote />}
                            ghost={<TbGhost2Filled />}
                            scream={<GiTerror />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/mask-4.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Magic mask"
                            invisible={<AiFillEyeInvisible />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/mask-5.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Cosmic mask"
                            flame={<GiFire />}
                            cosmic={<GiStarSwirl />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/mask-6.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
							name="Cybernetic mask"
                            teleport={<GiTeleport />}
                    />
				</div>
			</main>
		</>
	)
}
