import { PodilBubbleMessage } from "./PodilBubbleMessage";
import { UserBubbleMessage } from "./UserBubbleMessage";

export const Chat = () => {
    return (
        <div className="basis-1/3">
            <div className="p-2 rounded-t-xl bg-slate-50">
                <p className="font-bold text-xl text-slate-950">
                    PODIL
                </p>
                <p className="text-slate-950">Virtual Assitant</p>
            </div>
            <div className="backdrop-blur-sm">
                <PodilBubbleMessage />
                <UserBubbleMessage />
            </div>
        </div>
    );
};
