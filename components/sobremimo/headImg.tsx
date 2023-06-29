interface HeadImgProps {
    image: string;
}

function HeadImg({image}: HeadImgProps ){
    return (
        <div className="flex flex-row mx-7 max-md:mx-3 max-2xl:my-20 ">
            <img src={image} alt="" className="w-48 h-48 rounded-3xl object-cover"/>
        </div>
    );
}

export default HeadImg;