export const scrollToSection = (ref) => {
	if (ref.current) {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	} else {
		console.warn("Ref not attached to an element yet.");
	}
};