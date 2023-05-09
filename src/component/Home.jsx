import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div className="mt-32">
            <h1 className="text-center text-5xl font-bold my-10">Home page: {coffees.length}</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;