import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"

export default function StatRow() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })
    const formatNumber = (num, suffix) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M" + suffix;
        if (num >= 1000) return (num / 1000).toFixed(1) + "k" + suffix;
        return num;
    };
    const stats = [
        { label: "🔥 Recipes", value: 10000, suffix: "+" },
        { label: "⭐ Foodies", value: 200000, suffix: "+" },
        { label: "👨🏻‍🍳 Chef's choice", value: 100, suffix: "+" }
    ];

    return (
        <div ref={ref} className="py-8 md:py-16 my-12 flex flex-col md:flex-row gap-24 md:gap-60 justify-center items-center bg-gray-100">
            {
                stats.map((stat, i) => (
                    <div key={i} className="flex items-center flex-col gap-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-400">
                            {
                                inView &&
                                <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} formattingFn={(num) => formatNumber(num, stat.suffix)}/>
                            }
                        </h2>
                        <p className="text-2xl md:text-3xl font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))
            } 
        </div>
    )
}