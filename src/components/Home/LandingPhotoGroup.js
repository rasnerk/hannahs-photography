const LandingPhotoGroup = ({ group }) => {
    return (
        <div className="col-4">
            {group.map((img,i) => (
                <div key={i}>
                    <img className="content-photo" src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    )
}

export default LandingPhotoGroup