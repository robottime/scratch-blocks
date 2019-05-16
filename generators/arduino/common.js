'use strict';

goog.provide('Blockly.Arduino.common');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['text'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = text;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['math_whole_number'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['math_positive_number'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['math_number'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['math_integer'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['math_angle'] = function(block) {
  var num = block.getFieldValue('NUM');
  var code = num;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
