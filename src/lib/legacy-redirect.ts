export function legacyRedirect(destination: string, fragments: Record<string, string> = {}) {
	const alternatives = Object.entries(fragments).map(([fragment, href]) =>
		`<p><a href="${href}">${fragment.slice(1)}</a></p>`,
	).join('')

	return new Response(`<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex">
	<link rel="canonical" href="${destination}">
	<title>Page moved | Junsheng Huang</title>
	<script>
		const destination = ${JSON.stringify(destination)}
		const fragments = ${JSON.stringify(fragments)}
		const { hash, search } = window.location
		const target = new URL(Object.hasOwn(fragments, hash) ? fragments[hash] : destination + hash, window.location.origin)
		target.search = search
		window.location.replace(target.href)
	</script>
</head>
<body>
	<p>This page has moved to <a href="${destination}">${destination}</a>.</p>
	${alternatives}
</body>
</html>`, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' },
	})
}
