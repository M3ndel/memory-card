function Card ({ name, onClick}) {
	const gallery = import.meta.glob('./assets/apex-char/*.jpg', { eager: true, as: 'url' })
	const src = gallery['./assets/apex-char/' + name + '.jpg']
	return (
		<div style={{width: '100px', border: 'black 2px solid', background: 'gray'}} onClick={onClick}>
			<img style={{width: '100%'}} src={src} />
			<hr />
			<p>{name}</p>
		</div>
	)
}

export default Card