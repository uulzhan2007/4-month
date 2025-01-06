// MOVE BLOCK HW 1.2

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0
let positionY = 0

const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < offWidth) positionX++
    if (positionX >= offWidth && positionY < offHeight) positionY++
    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(moveBlock)
}

moveBlock();