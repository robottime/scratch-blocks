'use strict';

goog.provide('Blockly.Arduino.operators');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_map'] = function(block) {
  var val = Blockly.Arduino.valueToCode(block, 'VALUE', 
      Blockly.Arduino.ORDER_NONE) || '0';
  var from_min = Blockly.Arduino.valueToCode(block, 'MIN1', 
      Blockly.Arduino.ORDER_NONE) || '0';
  var from_max = Blockly.Arduino.valueToCode(block, 'MAX1', 
      Blockly.Arduino.ORDER_NONE) || '0';
  var to_min = Blockly.Arduino.valueToCode(block, 'MIN2', 
      Blockly.Arduino.ORDER_NONE) || '0';
  var to_max = Blockly.Arduino.valueToCode(block, 'MAX2', 
      Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'map(' + val + ', ' + from_min + ', ' + from_max +
      ', ' + to_min + ', ' + to_max + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_bool'] = function(block) {
  var b = block.getFieldValue('BOOLEAN') || false;
  var code = b;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_add'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', 
  	  Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', 
  	  Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var code = argument0 + ' + ' + argument1;
  return [code, Blockly.Arduino.ORDER_ADDITIVE];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_subtract'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', 
  	  Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', 
  	  Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var code = argument0 + ' - ' + argument1;
  return [code, Blockly.Arduino.ORDER_ADDITIVE];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_multiply'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var code = argument0 + ' * ' + argument1;
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_divide'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '1';
  var code = argument0 + ' / ' + argument1;
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_random'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'FROM', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'TO', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';

  var randomSeedCode = 'randomSeed(micros());';
  Blockly.Arduino.addSetup('rnd_seed', randomSeedCode, false);

  var code = 'random(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_lt'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', 
  	  Blockly.Arduino.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', 
  	  Blockly.Arduino.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' < ' + argument1;
  return [code, Blockly.Arduino.ORDER_RELATIONAL];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_equals'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', 
  	  Blockly.Arduino.ORDER_EQUALITY) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', 
  	  Blockly.Arduino.ORDER_EQUALITY) || '0';
  var code = argument0 + ' == ' + argument1;
  return [code, Blockly.Arduino.ORDER_EQUALITY];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_gt'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', 
  	  Blockly.Arduino.ORDER_RELATIONAL) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', 
  	  Blockly.Arduino.ORDER_RELATIONAL) || '0';
  var code = argument0 + ' > ' + argument1;
  return [code, Blockly.Arduino.ORDER_RELATIONAL];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_and'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', 
  	  Blockly.Arduino.ORDER_LOGICAL_AND) || 'false';
  var argument1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', 
  	  Blockly.Arduino.ORDER_LOGICAL_AND) || 'false';
  var code = argument0 + ' && ' + argument1;
  return [code, Blockly.Arduino.ORDER_LOGICAL_AND];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_or'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', 
  	  Blockly.Arduino.ORDER_LOGICAL_OR) || 'false';
  var argument1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', 
  	  Blockly.Arduino.ORDER_LOGICAL_OR) || 'false';
  var code = argument0 + ' || ' + argument1;
  return [code, Blockly.Arduino.ORDER_LOGICAL_OR];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_not'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'OPERAND', 
  	  Blockly.Arduino.ORDER_UNARY_PREFIX) || 'false';
  var code = '!' + argument0;
  return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_mod'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', 
  	  Blockly.Arduino.ORDER_MULTIPLICATIVE) || '1';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_round'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM', 
  	  Blockly.Arduino.ORDER_NONE) || '0';
  var code = 'round(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['operator_mathop'] = function(block) {
  var OPERATORS = {
    'abs': 'abs(',
    'floor': 'floor(',
    'ceiling': 'ceil(',
    'sqrt': 'sqrt(',
    'sin': 'sin(',
    'cos': 'cos(',
    'tan': 'tan(',
    'asin': 'asin(',
    'acos': 'acos(',
    'atan': 'atan(',
    'ln': 'log(',
    'log': 'log10(',
    'e ^': 'pow(M_E, ',
    '10 ^': 'pow(10, ',
  };
  var operator = OPERATORS[block.getFieldValue('OPERATOR')];
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM', 
  	  Blockly.Arduino.ORDER_NONE) || '0';
  Blockly.Arduino.addInclude('math', '#include <math.h>\n');
  var code = operator + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
