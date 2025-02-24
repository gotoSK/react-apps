import profPic from './assets/mr-depp.png'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profPic} alt="Profile Picture" />
            <h2 className='card-title'>Mr. Depp</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est necessitatibus labore, adipisci omnis saepe eaque? Dolorum, minima provident, perferendis nesciunt cupiditate soluta eius quaerat natus sit numquam voluptatibus obcaecati.</p>
        </div>
    );
}

export default Card