'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import {Briefcase, ChevronRight, Clock, MapPin} from 'lucide-react'
import {DEPARTMENTS, Job} from '../careers.constants'
import {departmentButtonStyles, jobCardStyles} from '../careers.styles'

interface JobListingsProps {
	selectedDept: string
	onSelectDept: (dept: string) => void
	filteredJobs: Job[]
}

export function JobListings({
	selectedDept,
	onSelectDept,
	filteredJobs,
}: JobListingsProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.5}}
		>
			<h2 className='mb-8 text-center text-2xl font-bold'>Open Positions</h2>
			<div className='mb-6 flex flex-wrap justify-center gap-2'>
				{DEPARTMENTS.map((d) => (
					<button
						key={d}
						onClick={() => onSelectDept(d)}
						className={departmentButtonStyles(selectedDept === d)}
					>
						{d}
					</button>
				))}
			</div>
			<div className='space-y-4'>
				{filteredJobs.map((job) => (
					<div key={job.id} className={jobCardStyles}>
						<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
							<div>
								<div className='flex items-center gap-2'>
									<h3 className='font-bold'>{job.title}</h3>
									<span className='bg-surface px-2 py-0.5 text-xs'>
										{job.department}
									</span>
								</div>
								<p className='mt-2 text-sm text-muted'>{job.description}</p>
								<div className='mt-3 flex gap-4 text-sm text-muted'>
									<span className='flex items-center gap-1'>
										<MapPin className='h-4 w-4' />
										{job.location}
									</span>
									<span className='flex items-center gap-1'>
										<Clock className='h-4 w-4' />
										{job.type}
									</span>
								</div>
							</div>
							<Button
								variant='outline'
								className='shrink-0'
								rightIcon={<ChevronRight className='h-4 w-4' />}
							>
								Apply
							</Button>
						</div>
					</div>
				))}
				{filteredJobs.length === 0 && (
					<div className='py-12 text-center'>
						<Briefcase className='mx-auto h-12 w-12 text-muted' />
						<p className='mt-4 font-medium'>No open positions</p>
					</div>
				)}
			</div>
		</motion.div>
	)
}
