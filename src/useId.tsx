import { useLayoutEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ids: string[] = [];

export function useId(): string {
    const [id, setId] = useState<string>("")
    useLayoutEffect(() => {
        let uuid: string = uuidv4();
        while (ids.indexOf(uuid) !== -1 ) {
            uuid = uuidv4();
        };
        setId(uuid);
        ids.push(uuid);
        console.log(ids)
        return function cleanup() { ids.splice(ids.indexOf(id), 1) };
    }, []);
    return id;
};