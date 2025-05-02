import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
	const [score, setScore] = useState(0)
	const [bestScore, setBestScore] = useState(0)
	const [guesses, setGuesses] = useState([])
	const [redraw, setRedraw] = useState(true)

	const charactersNames = [
		'Alter', 'Ash', 'Ballistic', 'Bangalore', 'Bloodhound', 'Catalyst', 
		'Caustic', 'Conduit', 'Crypto', 'Fuse', 'Gibraltar', 'Horizon', 'Lifeline', 
		'Loba', 'Mad_Maggie', 'Mirage', 'Newcastle', 'Octane', 'Pathfinder', 'Rampart', 
		'Revenant', 'Seer', 'Valkyrie', 'Vantage', 'Wattson', 'Wraith'
	]

	for (let i = 0; i < charactersNames.length; i ++) {
		const rand = Math.floor(Math.random() * (charactersNames.length - i)) + i;
		[charactersNames[i], charactersNames[rand]] = [charactersNames[rand], charactersNames[i]];
	}


	const pickCard = (name) => () => {
		if(!guesses.includes(name)) {
			const newGuesses = [...guesses, name];
			setGuesses(newGuesses)
			setScore(score + 1)
			if (score + 1 > bestScore) { setBestScore(score + 1) }

			if (score + 1 == charactersNames.length) {
				alert('Congratulations! You have perfect memory, all charactors has been picked\n Score: '+ (score + 1))
				setScore(0)
				setGuesses([])
			}
		}
		else {
			alert(name + ' has been pick, better luck next time\n Score: '+ score)
			setScore(0)
			setGuesses([])
		}
	}

	return (
		<>
			<h1>Apex Memory Game</h1>
			<p>Score: {score}&nbsp;&nbsp;Best Score: {bestScore}</p>
			<button onClick={()=>setRedraw(!redraw)}>redraw</button>
			<div className='board'>
				<Card name={charactersNames[0]} onClick={pickCard(charactersNames[0])} />
				<Card name={charactersNames[1]} onClick={pickCard(charactersNames[1])} />
				<Card name={charactersNames[2]} onClick={pickCard(charactersNames[2])} />
				<Card name={charactersNames[3]} onClick={pickCard(charactersNames[3])} />
				<Card name={charactersNames[4]} onClick={pickCard(charactersNames[4])} />
				<Card name={charactersNames[5]} onClick={pickCard(charactersNames[5])} />
				<Card name={charactersNames[6]} onClick={pickCard(charactersNames[6])} />
				<Card name={charactersNames[7]} onClick={pickCard(charactersNames[7])} />
				<Card name={charactersNames[8]} onClick={pickCard(charactersNames[8])} />
				<Card name={charactersNames[9]} onClick={pickCard(charactersNames[9])} />
				<Card name={charactersNames[10]} onClick={pickCard(charactersNames[10])} />
				<Card name={charactersNames[11]} onClick={pickCard(charactersNames[11])} />
				<Card name={charactersNames[12]} onClick={pickCard(charactersNames[12])} />
				<Card name={charactersNames[13]} onClick={pickCard(charactersNames[13])} />
			</div>
		</>
	)
}

export default App
