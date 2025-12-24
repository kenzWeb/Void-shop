'use client'

import {Button} from '@/components/ui'
import {MessageSquare} from 'lucide-react'
import {liveChatStyles} from '../contact.styles'

export function LiveChatCard() {
	return (
		<div className={liveChatStyles}>
			<div className='flex items-start gap-4'>
				<div className='flex h-12 w-12 shrink-0 items-center justify-center bg-accent'>
					<MessageSquare className='h-5 w-5 text-accent-foreground' />
				</div>
				<div>
					<h3 className='font-bold'>Live Chat</h3>
					<p className='mt-1 text-sm text-muted'>
						Chat with our support team in real-time.
					</p>
					<Button variant='outline' className='mt-4' size='sm'>
						Start Chat
					</Button>
				</div>
			</div>
		</div>
	)
}
