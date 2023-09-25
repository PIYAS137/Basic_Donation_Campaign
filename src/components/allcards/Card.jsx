import { Link } from "react-router-dom"

const Card = ({ data }) => {

    const { title, price, image, id, description, backgroundColor, textColor, titleBgColor, category } = data
    return (
        <Link to={`view/${id}`}>
            <div className={` rounded-xl overflow-hidden ${backgroundColor}`}>
                <div className="h-48 bgx" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="p-3">
                    <span className={`${titleBgColor} ${textColor} p-1 rounded-lg text-sm font-semibold inline-block px-3 my-2`}>{category}</span>
                    <h1 className={`${textColor} text-lg font-bold`}>{title}</h1>
                </div>
            </div>
        </Link>
    )
}

export default Card