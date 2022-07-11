import { socialMedia } from "../../lib/social-media"

const Socials = () => {
    return (
        <div className="socials">
            {socialMedia.map(media => (
                <div key={media.alt} style={{margin: "0 0.5em"}}>
                    <img className="social-icon" src={media.src} alt={media.alt} style={{width: media.width, height: media.height }} />
                </div>
            ))}
        </div>
    )
}

export default Socials