import React, { useEffect, useCallback } from 'react';

const Modal = ({ isOpen, onClose, imageUrl, altText }) => {
	const handleEscape = useCallback((event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		} else {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'auto';
		};
	}, [isOpen, handleEscape]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000070] transition-opacity duration-300 ease-in-out"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<div
				className="relative"
				onClick={(e) => e.stopPropagation()}
			>
				<div
					className="mx-4 max-h-[90vh] max-w-4xl transform overflow-hidden rounded-lg bg-white p-4 shadow-xl sm:mx-auto"
				>
					{imageUrl && (
						<a
							href={imageUrl}
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={-1}
							title="Open image in new tab"
						>
							<img
								src={imageUrl}
								alt={altText || 'Enlarged view'}
								className="h-auto w-full object-contain max-h-[calc(90vh-40px)]"
								id="modal-title"
							/>
						</a>
					)}
				</div>

				<button
					onClick={onClose}
					className="absolute right-[-1.25rem] top-[-2rem] z-10 flex h-8 w-8 -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full text-xl font-bold text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
					aria-label="Close modal"
				>
					&times;
				</button>
			</div>
		</div>
	);
}


export default Modal;
