import { MockResult } from '../../../server/types';

export type OwnProps = { title: string };
export type StateProps = { fetchingItems: boolean; items: MockResult[]; error: string | undefined };
export type DispatchProps = { fetchItems: (count: number) => void };
