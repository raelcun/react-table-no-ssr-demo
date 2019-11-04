import * as React from 'react';
import { MockResult } from '../../../server/types';

type Props = { items: MockResult[]; loading: boolean; error: string | undefined };

export const Table: React.FC<Props> = ({ items, loading, error }) => {
    if (error !== undefined) {
        return <>Error: {error}</>;
    }

    if (loading === true) {
        return <>Loading</>;
    }

    return (
        <>
            {items.map((item, i) => (
                <div key={i}>
                    <span>Random String: {item.randomString}</span>
                    <span>Random Number: {item.randomNumber}</span>
                </div>
            ))}
        </>
    );
};
