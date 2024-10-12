'use client'
import "../../globals.css"
import Image from "next/image"
import CardGun from "../../../components/cardGun/CardGun"

export default function Home() {
	return(
		<>
			<main className="w-full max-w-[2000px] h-auto pl-[90px] p-5 flex flex-col items-center justify-center">
				<h1 className="text-3xl my-7 text-center">Your guns</h1>

				<div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
					<CardGun 
						imagem={
							<Image
								src="/images/gun-1.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-2.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-3.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-4.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-5.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-6.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-7.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />

					<CardGun 
						imagem={
							<Image
								src="/images/gun-8.jpg"
								alt=""
								width={350}
								height={200}
								priority={true}
								quality={100}
								className="rounded-t-3xl w-full"
							/>
						}
						title={'Start my journey'}
						description={'Start playing our game today, here you will have fun with your friends.'}
						link="#"
                    />
				</div>
			</main>
		</>
	)
}
