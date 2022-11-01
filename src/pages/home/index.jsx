// Ici nous retrouvons notre page principale, sur laquel on importe nos components Section (bannière) et Card (afin d'afficher toutes les cards des logements)
import '../../style/App.css';
import Section from '../../components/banner';
import Card from '../../components/card';

function Home() {
  return (
    <div className="App">
      <Section/>
      <Card/>
    </div>
  );
}

export default Home;

