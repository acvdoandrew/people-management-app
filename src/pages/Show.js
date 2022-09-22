import { useParams } from 'react-router-dom';

function Show({ people }) {
    const { id } = useParams();
    
    const loading = () => {
        return <h1>Loading ...</h1>;
    };
    
    const loaded = () => {
        const person = people.find(p => p._id === id);  
        return (
            <section>
                <h1>{person.name}</h1>
                <img className="avatar-image" src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </section>
        )
    };

    return people ? loaded() : loading();

}

export default Show;