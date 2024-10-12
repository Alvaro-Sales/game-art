'use client'
import "../../globals.css"
import Image from "next/image"
import CardKnife from "../../../components/CardKnife/CardKnife"

export default function Home() {
	return(
		<>
			<main className="w-full max-w-[2000px] h-auto pl-[90px] p-5 flex flex-col items-center justify-center">
				<h1 className="text-3xl my-7">Your Knives</h1>

				<div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
					<CardKnife 
						imagem={
							<Image
								src="/images/knife-1.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-2.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-3.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-4.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-5.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-6.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-7.jpg"
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

					<CardKnife 
						imagem={
							<Image
								src="/images/knife-8.jpg"
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
