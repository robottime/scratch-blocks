'use strict';

goog.provide('Blockly.Arduino.control');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_repeat'] = function(block) {
  var repeats = Blockly.Arduino.valueToCode(
      block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var loopVar = Blockly.Arduino.variableDB_.getDistinctName(
      'i', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ++' +
      loopVar + ') {\n' +
      branch + '}\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_forever'] = function(block) {
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'while(true) {\n' +
      branch + '}\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_if'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_if_else'] = function(block) {
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');  
  var branch2 = Blockly.Arduino.statementToCode(block, 'SUBSTACK2');
  var code = 'if (' + argument + ') {\n' + branch +
  			 '} else {\n' + branch2 + '}\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['control_wait'] = function(block) {
  var delayTime = Blockly.Arduino.valueToCode(
      block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 0;
  if ( !isNaN(parseFloat(delayTime)) && isFinite(delayTime)) {
    delayTime = parseInt(Number(delayTime*1000), 10);
  } else {
    delayTime = delayTime + ' * 1000';
  }
  var code = 'delay(' + delayTime + ');\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_repeat_until'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_LOGICAL_OR) || 'false';
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '!' + argument0;
  var code = 'while (' + argument0 + ') {\n' + branch + '}\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_wait_until'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_LOGICAL_OR) || 'false';
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '!' + argument0;
  var code = 'while (' + argument0 + ') {}\n';
  return code;
};
