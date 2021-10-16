$(document).ready(() => {
    let doorImage1 = $('#door1');
    let doorImage2 = $('#door2');
    let doorImage3 = $('#door3');
    let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
    let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
    let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
    let numClosedDoors = 3;
    let openDoor1, openDoor2, openDoor3;
    let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
    let startButton = $('#start');
    let currentPlaying = true;

    // -- -- - Logic Check-- -- -

    const isBot = door => {
        if (door === botDoorPath) {
            return true;
        } else {
            return false;
        }
    };

    const isClicked = door => {
        return closedDoorPath !== door;
    };

    const playDoor = door => {
        numClosedDoors--;
        if (numClosedDoors == 0) {
            gameOver('win');
        } else if (isBot(door)) {
            gameOver();
        }
    };

    // -- -- - Random Door Generator-- -- -- -

    const randomChoreDoorGenerator = () => {
        const choreDoor = Math.floor(Math.random() * 1000);
        if (choreDoor % 3 == 0) {
            openDoor1 = botDoorPath;
            openDoor3 = spaceDoorPath;
            openDoor2 = beachDoorPath;
        } else if (choreDoor % 3 == 1) {
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
        } else {
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor2 = botDoorPath;
        }
    };

    // -- -- -- - Door Image Change-- -- -- -

    doorImage1.on('click', event => {
        if (isClicked(openDoor1) && currentPlaying) {
            $(event.currentTarget).attr('src', openDoor1);
            playDoor(doorImage1.attr('src'));
        }
    });
    doorImage2.on('click', event => {
        if (isClicked(openDoor2) && currentPlaying) {
            $(event.currentTarget).attr('src', openDoor2);
            playDoor(doorImage2.attr('src'));
        }
    });
    doorImage3.on('click', event => {
        if (isClicked(openDoor3) && currentPlaying) {
            $(event.currentTarget).attr('src', openDoor3);
            playDoor(doorImage3.attr('src'));
        }
    });

    // -- -- --Game Over-- -- -- -

    const gameOver = status => {
        if (status === 'win') {
            startButton.html('You win! Play again?');
        } else {
            startButton.html('Game over! Play again?');
        }
        currentPlaying = false;
    }

    // -- -- - Reset-- -- -
    const startRound = () => {
        numClosedDoors = 3;
        currentPlaying = true;
        startButton.html('Good luck!')
        doorImage1.attr('src', closedDoorPath);
        doorImage2.attr('src', closedDoorPath);
        doorImage3.attr('src', closedDoorPath);
        randomChoreDoorGenerator();
    };

    startButton.on('click', () => {
        startRound();
    });

    randomChoreDoorGenerator();
})