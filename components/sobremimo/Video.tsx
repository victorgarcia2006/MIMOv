

export default function VideoSection() {
    return (
        <div className="bg-white pt-20">
            <h2 className="text-center">¿Cómo funciona MIMO?</h2>
            <video 
                controls
                muted
                autoPlay 
                className="lg:h-screen lg:w-screen w-full h-auto mt-4"   
            >
                <source src="images/VIDEO.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}