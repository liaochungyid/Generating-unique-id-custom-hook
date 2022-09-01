import { useId } from "./useId";

export function Checkbox() {
    const id = useId();
    const id2 = useId();
    return (
        <>
            <div>
                <label htmlFor={id}>Do you like React?</label>
                <input id={id} type="checkbox" name="react"/>
            </div>
            <div>
                <label htmlFor={id2}>Do you really like React?</label>
                <input id={id2} type="checkbox" name="second"/>
            </div>
        </>
    );
};