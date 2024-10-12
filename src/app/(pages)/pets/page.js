'use client'
import "../../globals.css"
import Image from "next/image"
import { TbGhost2Filled } from "react-icons/tb"
import { RiSpeedMiniFill } from "react-icons/ri"
import { AiFillEyeInvisible } from "react-icons/ai"
import { GiStarSwirl, GiFire, GiTeleport, GiLaserPrecision, GiTerror, GiDeathNote, GiTripleClaws } from "react-icons/gi"
import CardMask from "../../../components/cardPet/cardPet"

export default function Home() {
	return(
		<>
			<main className="w-full max-w-[2000px] h-auto pl-[90px] p-5 flex flex-col items-center justify-center">
				<h1 className="text-3xl my-7 text-center">Your Pets</h1>

				<div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
					<CardMask 
						imagem={
							<Image
								src="/images/pet-1.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Robot fox"
                            speed={<RiSpeedMiniFill />}
                            claws={<GiTripleClaws />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/pet-2.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Robot dog"
                            ghost={<TbGhost2Filled />}
                            laser={<GiLaserPrecision />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/pet-3.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Cyber hummingbird"
                            death={<GiDeathNote />}
                            teleport={<GiTeleport />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/pet-4.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Cyber tiger"
                            invisible={<AiFillEyeInvisible />}
                            claws={<GiTripleClaws />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/pet-5.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Rhino"
                            flame={<GiFire />}
                            cosmos={<GiStarSwirl />}
                    />

					<CardMask 
						imagem={
							<Image
								src="/images/pet-6.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>}
                            name="Cyber bear"
                            claws={<GiTripleClaws />}
                            scream={<GiTerror />}
                    />
				</div>
			</main>
		</>
	)
}
