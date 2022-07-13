const LandingPhotoGroup = ({ group }) => {
    return (
        <div className="col-12 col-md-4">
            {group.map((img,i) => (
                <div key={i}>
                    <img className="content-photo" src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    )
}

export default LandingPhotoGroup