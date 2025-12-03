import { Container } from 'react-bootstrap';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

function Home() {
  const cats = useStore((state) => state.cats);
  const firstSix = cats.slice(0, 6);

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>🐱 Welcome to Cat Gallery</h1>
        <p className="lead mt-3">Discover adorable cats from around the world</p>
        <div className="my-4">
          <span style={{ fontSize: '100px' }}>😺</span>
        </div>
      </div>
      
      <h2 className="mb-4">Featured Cats</h2>
      {firstSix.length > 0 ? (
        <CardList cats={firstSix} />
      ) : (
        <p className="text-center text-muted">Visit "All Cats" to load cute cats!</p>
      )}
    </Container>
  );
}

export default Home;