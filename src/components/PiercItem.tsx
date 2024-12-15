import MotionDiv from "./MotionDiv";

import dot from "../assets/dot-gold-bullet.png";

type PiercDataType = {
  icon: JSX.Element;
  heading: string;
  types: { name: string; description: string }[];
};
type PiercItemProps = {
  data: PiercDataType;
  background?: string;
  textColor: string;
  backgroundImage?: string;
  iconColor: string;
};

const PiercItem = ({
  data,
  background,
  textColor,
  backgroundImage,
  iconColor,
}: PiercItemProps) => {
  return (
    <div className={`${background} ${textColor}`} style={{ backgroundImage }}>
      <MotionDiv
        isAnimatedFrom="left"
        className="md:py-18 relative m-auto flex w-[75%] flex-col py-16"
      >
        <div className="flex items-center gap-5 pb-12">
          <span className={`mt-3 ${iconColor}`}>{data.icon}</span>
          <h2 className="pb-3 pt-6 font-cormorant text-2xl font-semibold uppercase tracking-wide">
            {data.heading}
          </h2>
        </div>
        <ul className="flex flex-col">
          {data.types.map((type, index) => (
            <li key={index} className="flex flex-col py-5">
              <div className="flex w-full flex-col gap-4 text-xl sm:flex-row sm:gap-0">
                <h4 className="basis-1/2 uppercase">{type.name}</h4>
                <p className="flex basis-1/2 gap-3">
                  <img src={dot} className="mt-1 h-3 w-3" />

                  {type.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </div>
  );
};
export default PiercItem;
