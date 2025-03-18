const scrollToElement = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

export default scrollToElement