/* NON FONCTIONNEL

const details = document.querySelectorAll('.sujet');
const summaries = document.querySelectorAll('.details_summary');
const dropdowns = document.querySelectorAll('.details_dropdown');

summaries.forEach((summary, index) => {
    summary.addEventListener('click', (event) => {
        const currentDetail = details[index];
        const currentDropdown = dropdowns[index];

        if (currentDetail.hasAttribute('open')) {
            event.preventDefault();
            currentDropdown.classList.add('details_anim_close');
        } else {
            closeAllDetails(currentDetail);
            currentDropdown.classList.add('details_anim_open');
            // Scroll to the current <details> element
            currentDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('animationend', () => {
        if (dropdown.classList.contains('details_anim_close')) {
            dropdown.classList.remove('details_anim_close');
            details[index].removeAttribute('open');
        } else {
            dropdown.classList.remove('details_anim_open');
        }
    });
});

function closeAllDetails(exceptThisDetail) {
    details.forEach((detail, index) => {
        if (detail !== exceptThisDetail && detail.hasAttribute('open')) {
            dropdowns[index].classList.add('details_anim_close');
        }
    });
}*/