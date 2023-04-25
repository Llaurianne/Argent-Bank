import Banner from '../components/Banner'
import Feature from '../components/Feature'
import features from '../utils/content/features'

function Home() {
	document.title = 'Argent Bank - Home Page'
	return (
		<main>
			<Banner />
			<section className="features">
				<h2 className="sr-only">Features</h2>
				{features.map((feat) => (
					<Feature
						key={feat.name}
						name={feat.name}
						icon={feat.icon}
						title={feat.title}
						text={feat.text}
					/>
				))}
			</section>
		</main>
	)
}

export default Home
