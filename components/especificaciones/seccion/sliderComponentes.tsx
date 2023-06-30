import { Carousel } from "@mantine/carousel";

interface sliderComponentesProps {
  imagen: string;
  title: string;
  description: string;
}

function SliderComponentes({
  imagen,
  title,
  description,
}: sliderComponentesProps) {
  return (
    <div className="rounded-xl mt-[72px] flex flex-row items-center ">
      <div>
        <img src={imagen} alt="" className="w-32 h-20 rounded-2xl pr-6 "/>
      </div>
      <div>
        <h3 className="my-0">{title}</h3>
        <p className="text-black my-0 max-xl:text-xs max-xl:w-48">{description}</p>
      </div>
    </div>
  );
}

export default SliderComponentes;
