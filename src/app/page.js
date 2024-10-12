'use client'
import "./globals.css"
import Image from "next/image"
import Header from "../components/header/header"
import Card from "../components/card/card"

export default function Home() {
	return(
		<>
			<main className="w-full max-w-[2000px] h-auto pl-[90px] p-5 flex flex-col items-center justify-center">
				<Header />

				<h1 className="text-3xl my-6">News in the game</h1>

				<div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
					<Card 
						imagem={
							<Image
								src="/images/bgCard.jpg"
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

					<Card 
						imagem={
							<Image
								src="/images/bgCard-2.jpg"
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

					<Card 
						imagem={
							<Image
								src="/images/bgCard.jpg"
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

					<Card 
						imagem={
							<Image
								src="/images/bgCard-2.jpg"
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
