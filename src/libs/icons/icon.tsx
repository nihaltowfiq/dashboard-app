import { FC, SVGAttributes } from 'react';

const Icon: FC<IconProps> = ({ path, fill, ...rest }): JSX.Element => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
			<path d={path} fill={fill} />
		</svg>
	);
};

export default Icon;

export interface IconProps extends SVGAttributes<SVGElement> {
	path: string;
}

Icon.defaultProps = {
	width: 24,
	height: 24,
	fill: '#AFAFAF',
};
