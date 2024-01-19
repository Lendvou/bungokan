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

interface AsyncLiveQueryOptions<T> {
    defaultIfMissing?: T;
    skip?: boolean;
}

const useAsyncLiveQuery = <T>(
    querier: (db: BungokanDB) => Promise<T>,
    deps: any[] = [],
    options?: AsyncLiveQueryOptions<T>
): AsyncLiveQueryReturn<T> => {
    const [data, status] = useLiveQuery(
        () => {
            if (options?.skip) {
                return [undefined, Status.PENDING];
            }

            return querier(db).then((data: T) => {
                const d =
                    data === undefined && options
                        ? options.defaultIfMissing
                        : data;
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
