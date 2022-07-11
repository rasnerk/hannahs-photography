import { landingPhotos } from "../../lib/landing"
import LandingPhotoGroup from "./LandingPhotoGroup"

const Content = () => {
    return (
        <div className="content">
            <LandingPhotoGroup group={landingPhotos.imgGroupLeft} />
            <LandingPhotoGroup group={landingPhotos.imgGroupMiddle} />
            <LandingPhotoGroup group={landingPhotos.imgGroupRight} />
        </div>
    )
}

export default Content