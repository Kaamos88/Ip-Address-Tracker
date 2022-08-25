const ElementDetails = ({ head, text }) => {
  return (
    <div className="w-full text-center lg:text-left lg:pl-6 my-auto lg:my-0">
      <h3 className="text-[#969696] text-[0.6rem] tracking-[0.15rem] pb-3 uppercase font-semibold">
        {head}
      </h3>
      <p className="text-2xl font-bold">{text}</p>
    </div>
  );
};

export default ElementDetails;
