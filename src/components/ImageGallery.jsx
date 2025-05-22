import { useState } from 'react';
import Modal from './Modal';

const ImageGallery = ({ images = [], project = 'Project' }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImageUrl, setSelectedImageUrl] = useState(null);

	const openModal = (imageUrl) => {
		setSelectedImageUrl(imageUrl);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImageUrl(null);
	};

	return (
		<div>
			{images.length > 0 ? (
				<div className="images flex flex-nowrap overflow-x-auto whitespace-nowrap gap-4 pt-6 pb-4 transparent-scrollbar">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`${project} screenshot ${index + 1}`}
							className="w-[220px] cursor-pointer rounded border object-cover object-top shadow transition-shadow duration-200 ease-in-out hover:shadow-lg aspect-[3/2]"
							onClick={() => openModal(image)}
						/>
					))}
				</div>
			) : ""}

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				imageUrl={selectedImageUrl}
				altText={`Enlarged view of ${project} screenshot`}
			/>
		</div>
	);
}

export default ImageGallery;