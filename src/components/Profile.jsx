const Profile = () => {
    return (
        <div className="content">
            <div className="top_img"></div>
            <div className="bio">
                <div className="bio_img"></div>
                <div className="bio_info">
                    <div className="name">
                        <p>Yurii Osadchii</p>
                    </div>
                    <div>
                        <p>Date of Birthd: 21 April</p>
                    </div>
                    <div>
                        <p>City: Kyiv</p>
                    </div>
                    <div>
                        <p>Education: KPI</p>
                    </div>
                </div>
            </div>
            <div>
                <p>My Posts</p>
                <textarea placeholder="your news..." cols="125" rows="5"></textarea>
                <button>Send</button>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}

export default Profile;