

export default function GreetingCard() {
    const domainName = window.location.hostname;
    let mainTitle = domainName.includes("febzey") ? "Febzey" : "Brayden";

    return (
        <div className="w-full min-h-72 h-auto bg-blue-500/90 rounded-xl shadow-2xl relative">
            <div className="z-50">
                <div className="bg-blue-500 w-full min-h-20 h-20 rounded-t-xl flex items-center p-8">
                    <h1 className="font-bakbak text-4xl text-white mx-auto">{mainTitle}</h1>
                </div>

                <div className="flex p-8 items-center font-poppins text-neutral-100">
                    <ul className="text-lg list-disc">
                        <li>Mediocre Fullstack developer based in Canada.</li>
                        <li>Writes poor code.</li>
                        <li>I love Next but I hate Vercel!</li>
                        <li>If you want something made you can contact me.</li>
                    </ul>
                </div>
            </div>
            <div className="bg-sprinkle bg-no-repeat bg-cover absolute w-[90%] left-0 right-0 top-0 mx-auto h-full -z-10">
            </div>
        </div>
    )
}