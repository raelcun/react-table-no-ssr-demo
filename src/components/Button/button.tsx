import * as React from 'react';

type Props = { onClick: React.MouseEventHandler<HTMLButtonElement> };

export const Button: React.FC<Props> = ({ children, onClick }) => <button onClick={onClick}>{children}</button>;
