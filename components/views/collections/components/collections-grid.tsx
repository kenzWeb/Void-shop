'use client'

import {collectionsGridStyles} from '../collections.styles'
import {CollectionItem} from '../collections.types'
import {CollectionCard} from './collection-card'

interface CollectionsGridProps {
	collections: CollectionItem[]
}

export function CollectionsGrid({collections}: CollectionsGridProps) {
	return (
		<div className={collectionsGridStyles}>
			{collections.map((collection, index) => (
				<CollectionCard
					key={collection.id}
					id={collection.id}
					name={collection.name}
					description={collection.description}
					count={collection.count}
					index={index}
				/>
			))}
		</div>
	)
}
