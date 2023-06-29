interface HeadImgProps {
    image: string;
}

function HeadImg({image}: HeadImgProps ){
    return (
        <div className="flex flex-row mx-7 max-lg:mx-3 max-lg:my-3">
            <img src={image} alt="" className="w-48 h-48 rounded-3xl object-cover"/>
        </div>
    );
}

export default HeadImg;