import { useSword } from '@packages/components'
import { useShield } from '@packages/utils'

const HERO = 'Nick'

/**
 * @param {String} hero
 * @returns {void}
 * @description hero get a courage
 */
function useCourage(hero) {
  console.log('    **    ');
  console.log('  **  **  ');
  console.log(' **    ** ');
  console.log(' **    ** ');
  console.log(' **    ** ');
  console.log('  **  **  ');
  console.log('    **    ');
  console.log('=========================================');
  console.log(`> -Hero Nick start his adventure from core-`);
  console.log('=========================================');
}

/**
 * @param {String} hero
 * @returns {void}
 * @description hero dead in the battle
 */
function useTheEnd(hero) {
  console.log('||')
  console.log('==========================================');
  console.log('> But he still can not defeat the Devil,');
  console.log(`> Hero ${hero} finally dead in the battle.`);
  console.log('==========================================');
}

/**
 * @param {String} hero
 * @property {function} useCourage - hero get a courage
 * @property {function} useShield - hero get a Shield
 * @property {function} useSword - hero get a Sword
 * @returns {void}
 * @description hero start his adventure
 */
function statrtAdventure(hero) {
  console.log("||#########")
  console.log("||#########")
  console.log("||#########")
  console.log("||")
  console.log("||")
  console.log("||")
  console.log('=================================');
  console.log(`> Hero ${hero} start his adventure`);
  console.log('=================================');

  useCourage(hero)
  useShield(hero)
  useSword(hero)
  useTheEnd(hero)
}

statrtAdventure(HERO)