import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "./technologyTypes";



const Technologies = () => {

    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });

    }, []);

    const addToStack = (technology: Technology) => {

        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack([...stack, technology]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const removeFromStack = (id: string) => {

        const technology = stack.find(
            (item) => item.id === id
        );

        setStack(
            stack.filter((item) => item.id !== id)
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack.`);
        }
    };

    const removeAll = () => {

        if (stack.length === 0) {
            return;
        }

        setStack([]);

        toast.info("All technologies removed from your stack.");
    };

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-fuchsia-500"></div>
            </div>
        );
    }

    return (
        <section className="px-5 -mt-40 py-10">

            <div className="mx-auto max-w-6xl">



                <div className="mb-10">

                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Explore the{" "}
                        <span className="text-fuchsia-500">
                            Technologies
                        </span>
                    </h1>

                    <p className="mt-2  text-xs text-slate-400 font-semibold">
                        Pick one technology per category to build your ideal stack.
                    </p>

                </div>



                <div className="flex flex-col gap-5 lg:flex-row">



                    <div className="grid flex-1 grid-cols-3 gap-4">

                        {technologies.map((technology) => (

                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isAdded={stack.some(
                                    (item) => item.id === technology.id
                                )}
                                onAdd={addToStack}
                            />

                        ))}

                    </div>



                    <YourStack
                        stack={stack}
                        onRemove={removeFromStack}
                        onRemoveAll={removeAll}
                    />

                </div>

            </div>

        </section>
    );
};

export default Technologies;