// funtion to show sidebar 

const sideBar = document.querySelector('.sidebar');

function showSideBar() {
        sideBar.style.display = 'flex';
}

function hideSideBar() {
        sideBar.style.display = 'none';
}

// function for accordion 1 - about page
document.addEventListener('DOMContentLoaded', function () {
        arrowCollapse1.style.display = 'none';
        arrowCollapse2.style.display = 'none';
        arrowCollapse3.style.display = 'none';
    });

const content1 = document.querySelector('.accordion-content1');
const arrowExpand1 = document.querySelector('.arrow-expand1');
const arrowCollapse1 = document.querySelector('.arrow-collapse1');

function expandAccordion1() {
        content1.style.display = 'flex';
        arrowExpand1.style.display = 'none';
        arrowCollapse1.style.display = 'block';
} 

function collapseAccordion1() {
        content1.style.display = 'none';
        arrowExpand1.style.display ='block';
        arrowCollapse1.style.display = 'none';
}

// function for accordion 2 - about page
const content2 = document.querySelector('.accordion-content2');
const arrowExpand2 = document.querySelector('.arrow-expand2');
const arrowCollapse2 = document.querySelector('.arrow-collapse2');

function expandAccordion2() {
        content2.style.display = 'flex';
        arrowExpand2.style.display = 'none';
        arrowCollapse2.style.display = 'block';
} 

function collapseAccordion2() {
        content2.style.display = 'none';
        arrowExpand2.style.display ='block';
        arrowCollapse2.style.display = 'none';
}

// function for accordion 3 - about page
const content3 = document.querySelector('.accordion-content3');
const arrowExpand3 = document.querySelector('.arrow-expand3');
const arrowCollapse3 = document.querySelector('.arrow-collapse3');

function expandAccordion3() {
        content3.style.display = 'flex';
        arrowExpand3.style.display = 'none';
        arrowCollapse3.style.display = 'block';
} 

function collapseAccordion3() {
        content3.style.display = 'none';
        arrowExpand3.style.display ='block';
        arrowCollapse3.style.display = 'none';
}