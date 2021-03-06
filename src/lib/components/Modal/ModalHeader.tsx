import React, { ReactNode } from 'react';

interface IModalHeaderProps {
	children?: ReactNode;
	onClose?: Function;
	isDismissable?: boolean;
}

export const ModalHeader = (props: IModalHeaderProps) => {

	const { children, isDismissable = false, onClose } = props;

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div className="modal-header">
			<h5 className="modal-title">
				{children}
			</h5>
			{
				isDismissable &&
				<button type="button" className="close" onClick={handleClick}>
					<span aria-hidden="true">&times;</span>
				</button>
			}
		</div>
	);
};
