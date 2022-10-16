
const RG = ({data}) => {
    return (
    <div className="card" key={data.id}>
        <img src={data.artist_image} alt="thumb" />
        <div className="des">
            <h3>{data.artist_name}</h3>
        </div>
    </div>
    )
}

export default RG;