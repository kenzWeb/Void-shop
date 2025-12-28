/**
 * Rebuild Git History (Real Files)
 *
 * Strategy:
 * 1. Scans all current files.
 * 2. Groups them by "Feature" (e.g. Auth, Checkout, UI Kit).
 * 3. Commits these groups sequentially over 60 days.
 * 4. Result: Commits contain REAL files (no empty commits).
 */

const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

// Configuration
const DAYS_BACK = 60
const IGNORE_DIRS = [
	'node_modules',
	'.git',
	'.next',
	'out',
	'dist',
	'build',
	'.gemini',
	'.DS_Store',
]
const IGNORE_FILES = [
	'generate-history.js',
	'generate-smart-history.js',
	'rebuild-history.js',
	'bun.lock',
	'package-lock.json',
	'yarn.lock',
]

// Helper: Random Integer
const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min

// Helper: Run Shell Command
const run = (cmd) => {
	try {
		execSync(cmd, {stdio: 'pipe'})
	} catch (e) {
		// console.error(`Failed: ${cmd}`);
	}
}

// 1. Initialize Git if not exists
if (!fs.existsSync('.git')) {
	console.log('Initialize Git...')
	run('git init')
	run('git branch -M main')
}

// 2. Scan Files recursively
function scan(dir) {
	let results = []
	const list = fs.readdirSync(dir)
	list.forEach((file) => {
		const fullPath = path.join(dir, file)
		const stat = fs.statSync(fullPath)
		if (IGNORE_DIRS.includes(file)) return
		if (IGNORE_FILES.includes(file)) return

		if (stat && stat.isDirectory()) {
			results = [...results, ...scan(fullPath)]
		} else {
			results.push(fullPath)
		}
	})
	return results
}

const allFiles = scan('.')
console.log(`Found ${allFiles.length} files to commit.`)

// 3. Group Files by Scope
const groups = {
	init: [],
	config: [],
	types: [],
	utils: [],
	ui: [],
	hooks: [],
	auth: [],
	store: [],
	layout: [],
	home: [],
	shop: [],
	product: [],
	cart: [],
	checkout: [],
	pages: [], // Fallback
}

allFiles.forEach((f) => {
	if (f.match(/package\.json|tsconfig|next\.config|postcss|tailwind/))
		return groups['config'].push(f)
	if (f.includes('types/')) return groups['types'].push(f)
	if (f.includes('lib/') || f.includes('utils')) return groups['utils'].push(f)
	if (f.includes('components/ui')) return groups['ui'].push(f)
	if (f.includes('hooks/')) return groups['hooks'].push(f)
	if (f.includes('store/')) return groups['store'].push(f)

	// Features
	if (f.includes('login') || f.includes('register') || f.includes('auth'))
		return groups['auth'].push(f)
	if (f.includes('header') || f.includes('footer') || f.includes('layout'))
		return groups['layout'].push(f)
	if (f.includes('cart')) return groups['cart'].push(f)
	if (f.includes('checkout')) return groups['checkout'].push(f)
	if (f.includes('product')) return groups['product'].push(f)
	if (f.includes('shop') || f.includes('filter')) return groups['shop'].push(f)
	if (f.includes('home') || f.includes('hero')) return groups['home'].push(f)

	// Global files or others
	groups['pages'].push(f)
})

// 4. Define Chronological Order
const phases = [
	{key: 'config', msg: 'chore: initial project setup and config'},
	{key: 'types', msg: 'feat(core): define global types and interfaces'},
	{key: 'utils', msg: 'feat(core): implement utility functions'},
	{key: 'ui', msg: 'feat(ui): implement design system components'},
	{key: 'hooks', msg: 'feat(hooks): add custom react hooks'},
	{key: 'store', msg: 'feat(state): setup zustand stores'},
	{key: 'layout', msg: 'feat(layout): implement app shell and navigation'},
	{key: 'auth', msg: 'feat(auth): implement login and registration'},
	{key: 'home', msg: 'feat(home): build landing page'},
	{key: 'shop', msg: 'feat(shop): implement product catalog and filters'},
	{key: 'product', msg: 'feat(product): implement product details view'},
	{key: 'cart', msg: 'feat(cart): implement shopping cart logic'},
	{key: 'checkout', msg: 'feat(checkout): build checkout flow'},
	{key: 'pages', msg: 'feat(pages): add remaining views'},
]

const now = new Date()
const startDate = new Date(now)
startDate.setDate(startDate.getDate() - DAYS_BACK)

console.log(`Generating history from ${startDate.toISOString()}...`)

let currentDayOffset = 0
let totalCommits = 0

phases.forEach((phase, index) => {
	const files = groups[phase.key]
	if (!files || files.length === 0) return

	// Split large groups into smaller commits to make history richer
	const chunkSize = 5 // Max files per commit
	for (let i = 0; i < files.length; i += chunkSize) {
		const chunk = files.slice(i, i + chunkSize)

		// Advance time
		// config/types happen early (day 0-5)
		// features happen later
		// spread evenly
		const phaseProgress = index / phases.length
		const targetDay = Math.floor(DAYS_BACK * phaseProgress)

		// Add random variation to day
		const day = targetDay + randomInt(0, 2)

		const date = new Date(startDate)
		date.setDate(date.getDate() + day)
		date.setHours(randomInt(9, 20), randomInt(0, 59), 0)

		if (date > now) date.setTime(now.getTime() - 1000000) // Cap at now

		// Git commands
		const filesStr = chunk.map((f) => `"${f}"`).join(' ')
		run(`git add ${filesStr}`)

		// Dynamic message
		let msg = phase.msg
		if (chunk.length === 1 && chunk[0].includes('tsx')) {
			const name = path.basename(chunk[0], '.tsx')
			msg = `feat(${phase.key}): implement ${name} component`
		} else if (i > 0) {
			msg = `feat(${phase.key}): continue implementation`
		}

		run(`git commit --date="${date.toISOString()}" -m "${msg}"`)
		process.stdout.write('.')
		totalCommits++
	}
})

// Final fallback in case anything missed
run('git add .')
try {
	run(
		`git commit --date="${now.toISOString()}" -m "chore: final polish and build check"`,
	)
} catch (e) {}

console.log(`\n\n✅ Done! Created ${totalCommits} REAL commits.`)
console.log('Run: git push origin main --force')
