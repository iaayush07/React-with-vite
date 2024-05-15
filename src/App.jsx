import './App.css';
import Card from './card';

function App() {

  const cardsData = [{
    id: 0,
    title: 'Supervisor',
    detail: 'Monitors activity to identify project roadblocks',
    logo: 'src/assets/images/icon-supervisor.svg',
    class: 'supervisor'
  }, {
    id: 1,
    title: 'Team Builder',
    detail: 'Scans our talent network to create the optimal team for your project',
    logo: 'src/assets/images/icon-team-builder.svg',
    class: 'team-builder'
  }, {
    id: 2,
    title: 'Karma',
    detail: 'Regularly evaluates our talent to ensure quality',
    logo: 'src/assets/images/icon-karma.svg',
    class: 'karma'
  }, {
    id: 3,
    title: 'Calculator',
    detail: 'Uses data from past projects to provide better delivery estimates',  
    logo: 'src/assets/images/icon-calculator.svg',
    class: 'calculator'
  }];

  return (
    <>
      <main>
        <h3>
          Reliable, efficient delivery
        </h3>
        <h2>
          Powered by Technology
        </h2>
        <p className='project-detail'>
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
        <div className='card-container'>
          <div className='card-wrapper'>
            {cardsData.slice(0, 1).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                detail={card.detail}
                logo={card.logo}
                className={card.class}
              />
            ))}
          </div>
          <div className='card-wrapper'>
            {cardsData.slice(1, 3).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                detail={card.detail}
                logo={card.logo}
                className={card.class}
              />
            ))}
          </div>
          <div className='card-wrapper'>
            {cardsData.slice(3).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                detail={card.detail}
                logo={card.logo}
                className={card.class}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
