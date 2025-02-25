import PropTypes from 'prop-types';

function List({items = []}) {
    // actors.sort((a, b) => a.name.localeCompare(b.name)); // lexicographic sort
    // actors.sort((a, b) => b.name.localeCompare(a.name)); // lexicographic sort reversed
    // actors.sort((a, b) => a.rating - b.rating); // ascending sort based on ratings
    // actors.sort((a, b) => b.rating - a.rating); // descending sort based on ratings
    
    const lowRatings = items.filter(actor => actor.rating < 80);

    const listItems = lowRatings.map(actor =>
        <li key={actor.name}>
            {actor.name}: &nbsp; <b>{actor.rating}</b>
        </li>
    );
    return(<ol>{listItems}</ol>);
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.number
    }))
};

export default List;