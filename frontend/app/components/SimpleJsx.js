export default function SimpleJsx() {
    const avatar = "https://randomuser.me/api/portraits/men/21.jpg";
    return (
        <div>
            <div>One</div>
            <div>Two</div>
            <img
                src={avatar}
                alt="Hedy Lamarr"
                className="photo"
            />
        </div>

    );
}