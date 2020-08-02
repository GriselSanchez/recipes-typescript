import React from 'react';

interface Props {
	text: string;
}

const Bold: React.FC<Props> = ({ text }: Props) => {
	return <span style={{ fontWeight: 'bold' }}>{text}</span>;
};

export default Bold;
