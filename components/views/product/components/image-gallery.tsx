'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import {mainImageStyles, thumbnailStyles} from '../product.styles'

interface ImageGalleryProps {
	images: {id: string; url: string; alt: string}[]
	selectedIndex: number
	onSelectImage: (index: number) => void
	productName: string
}

export function ImageGallery({
	images,
	selectedIndex,
	onSelectImage,
	productName,
}: ImageGalleryProps) {
	return (
		<div className='space-y-4'>
			<motion.div
				key={selectedIndex}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				className={mainImageStyles}
			>
				{images[selectedIndex] ? (
					<Image
						src={images[selectedIndex].url}
						alt={images[selectedIndex].alt}
						fill
						priority
						className='object-cover'
					/>
				) : (
					<div className='flex h-full items-center justify-center'>
						<span className='text-6xl font-bold text-muted/20'>
							{productName.charAt(0)}
						</span>
					</div>
				)}
			</motion.div>

			{images.length > 1 && (
				<div className='flex gap-2'>
					{images.map((image, index) => (
						<button
							key={image.id}
							onClick={() => onSelectImage(index)}
							className={thumbnailStyles(selectedIndex === index)}
						>
							<Image
								src={image.url}
								alt={image.alt}
								fill
								className='object-cover'
							/>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
