const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 15;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK =0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK =0
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];

function getMaxLifeValues() {
  const enteredValue = prompt("Maximum Life for you an monster", "100");

  const parsedValue = parseInt(enteredValue);
  if (parsedValue <=0 || isNaN(parsedValue)) {
    throw {message: 'Invalid user input, not a number!'};
  }
  return parsedValue;
}

let chosenMaxLife = 0;

try {
chosenMaxLife = getMaxLifeValues();
} catch(error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, so default health is 100 now');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonuslife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry;
      break;
    default:
      logEntry = {};
  }
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry;
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function attackMonster(mode) {
  //to understand ternary operator below
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    Math.round(damage),
    Math.round(currentMonsterHealth),
    Math.round(currentPlayerHealth)
  );
  endRound();
}

function endRound() {
  const initialPlayerLife = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    Math.round(playerDamage),
    Math.round(currentMonsterHealth),
    Math.round(currentPlayerHealth)
  );

  if (currentPlayerHealth <= 0 && hasBonuslife) {
    hasBonuslife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerLife;
    setPlayerHealth(initialPlayerLife);
    alert("You would be dead but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      Math.round(currentMonsterHealth),
      Math.round(currentPlayerHealth)
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      Math.round(currentMonsterHealth),
      Math.round(currentPlayerHealth)
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a Draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "DRAW",
      Math.round(currentMonsterHealth),
      Math.round(currentPlayerHealth)
    );
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max initial health");
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    Math.round(healValue),
    Math.round(currentMonsterHealth),
    Math.round(currentPlayerHealth)
  );
  endRound();
}

function printLogHandler() {
  //below shown noramal for loop
  // for(let i=0; i<battleLog.length; i++){
  //   console.log(battleLog[i]);
  // } //or this below for in loop
  let i = 0;
  for (const logEntry of battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key} = ${logEntry[key]}`);
    } 
    i++;// Incrementing i global variavle not initialized in loop
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
