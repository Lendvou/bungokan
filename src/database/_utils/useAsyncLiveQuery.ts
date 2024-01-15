import { useLiveQuery } from "dexie-react-hooks";
import { BungokanDB, db } from "..";

enum Status {
    PENDING = "pending",
    RESOLVED = "resolved",
}

type AsyncLiveQueryReturn<T = any> =
    | AsyncLiveQueryReturnPending
    | AsyncLiveQueryReturnResolved<T>;

interface AsyncLiveQueryReturnPending {
    isLoading: true;
    isSuccess: false;
    status: Status.PENDING;
    data: undefined;
}

interface AsyncLiveQueryReturnResolved<T = any> {
    isLoading: false;
    isSuccess: true;
    status: Status.RESOLVED;
    data: T extends Array<infer U> ? Array<U> : T | undefined;
}

const useAsyncLiveQuery = <T>(
    querier: (db: BungokanDB) => Promise<T>,
    deps: any[] = [],
    defaultIfMissing?: T
): AsyncLiveQueryReturn<T> => {
    const [data, status] = useLiveQuery(
        () => {
            return querier(db).then((data: T) => {
                const d = data === undefined ? defaultIfMissing : data;
                return [d, Status.RESOLVED];
            });
        },
        deps,
        [undefined, Status.PENDING]
    );

    return {
        isLoading: status === Status.PENDING,
        isSuccess: status === Status.RESOLVED,
        status,
        data,
    } as AsyncLiveQueryReturn<T>;
};

export default useAsyncLiveQuery;
