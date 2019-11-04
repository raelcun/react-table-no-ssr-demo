import * as React from 'react';
import { Button } from '../../components/Button';
import { OwnProps, StateProps, DispatchProps } from './types';
import { Table } from '../../components/Table';

export const App: React.FC<OwnProps & StateProps & DispatchProps> = ({
    title,
    fetchingItems,
    items,
    fetchItems,
    error,
}) => {
    const [count, setCount] = React.useState<number>(50);

    return (
        <>
            <h1>{title}</h1>
            <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
            <Button onClick={() => fetchItems(count)}>FetchItems</Button>
            <Table loading={fetchingItems} items={items} error={error} />
        </>
    );
};
