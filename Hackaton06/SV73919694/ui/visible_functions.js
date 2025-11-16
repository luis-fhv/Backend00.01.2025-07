export function showSection(sectionId) {
    document.getElementById(sectionId).classList.remove('hidden');
}

export function hiddenSection(sectionId) {
    document.getElementById(sectionId).classList.add('hidden');
}