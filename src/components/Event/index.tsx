interface CardProps {
    EventName?: string;
    EventDescription?: string;
    ImageEvent?: string;
}

const Card = ({ EventName, EventDescription, ImageEvent }: CardProps) => {
    return (
        <div className="w-full grid justify-center">
            <div className="grid bg-slate-300 w-[400px] p-6 gap-7 rounded-2xl">
                <div className="flex justify-center">
                    <img src={ImageEvent} alt={ImageEvent} />
                </div>
                <div className="flex justify-center">
                    <p className="text-3xl font-semibold">{EventName}</p>
                </div>
                <p className="text-xl">{
                    EventDescription
                }</p>
            </div>
        </div>
    );
};
export default Card;