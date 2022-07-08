const Content = () => {
    return (
        <div className="content">
            <div className="col-10" style={{textAlign: "center"}}>
                <h2>Some Other Text</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="col-5" style={{padding: "2em"}}>
                <img className="content-photo" src="imgs/image00245.jpeg" alt="Man Smoking" />
            </div>
            <div className="col-5" style={{padding: "2em"}}>
                <img className="content-photo" src="imgs/image00239.jpeg" alt="Beach" />
            </div>
            <div className="content">
                <div className="col-5">
                    <img className="content-photo" src="imgs/image00007.jpeg" alt="Desert" />
                </div>
                <div className="col-4" style={{textAlign: "center", padding: "20% 2em"}}>
                    <h2>Some Other Text</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Content