'use strict';

goog.provide('Blockly.Arduino.data');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['data_variable'] = function(block) {
  var val = block.getFieldValue('VARIABLE') || false;
  var name = Blockly.Arduino.variableDB_.getName(val, Blockly.Variables.NAME_TYPE);
  var code = name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['data_setvariableto'] = function(block) {
  var val = block.getFieldValue('VARIABLE') || null;
  var name = Blockly.Arduino.variableDB_.getName(val, Blockly.Variables.NAME_TYPE);
  var argument = Blockly.Arduino.valueToCode(block, 'VALUE', 
     Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var code = name + ' = '  + argument + ';\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['data_changevariableby'] = function(block) {
  var val = block.getFieldValue('VARIABLE') || null;
  var name = Blockly.Arduino.variableDB_.getName(val, Blockly.Variables.NAME_TYPE);
  var argument = Blockly.Arduino.valueToCode(block, 'VALUE', 
     Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var code;
  if (argument.charAt(0) == '-') {
  	code = name + ' -= ' + argument.substr(1) + ';\n'
  } else {
  	code = name + ' += '  + argument + ';\n';
  }
  return code;
};
