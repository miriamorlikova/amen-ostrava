type PriceItemProps = {
  heading: string;
  description?: string;
  price: string;
};

const PriceItem = ({ heading, description, price }: PriceItemProps) => {
  return (
    <div className="flex justify-between border-b pb-6 pt-6 text-primary-light">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl xl:text-2xl">{heading}</h2>
        <p className="text-sm text-primary-light opacity-80 sm:text-base">
          {description}
        </p>
      </div>
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
};

export default PriceItem;
