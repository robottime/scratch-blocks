'use strict';

goog.provide('Blockly.Arduino.click');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_motor_menu'] = function(block) {
  var m_pin = block.getFieldValue('MOTOR') == '_motor1_' ? '56' : '78';
  var code = m_pin;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_led_menu'] = function(block) {
  var l_pin;
  switch(block.getFieldValue('LED')) {
    case '_led2_':
      l_pin = '6';
      break;
    case '_led3_':
      l_pin = '7';
      break;
    case '_led4_':
      l_pin = '8';
      break;
    default:
      l_pin = '5';
  }
  var code = l_pin;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_sensor_menu'] = function(block) {
  var s_pin = block.getFieldValue('SENSOR') == '_sensor1_' ? 'A0' : 'A1';
  var code = s_pin;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_pwm'] = function(block) {
  var pwm = block.getFieldValue('PWM');
  var code = pwm;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_motor_turnleft'] = function(block) {
  var main_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(0) || '5';
  var sub_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(1) || '6';

  Blockly.Arduino.reservePin(
      block, main_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + main_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + main_pin, pinSetupCode, false);

  Blockly.Arduino.reservePin(
      block, sub_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + sub_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + sub_pin, pinSetupCode, false);

  var code = 'digitalWrite(' + main_pin + ', HIGH);\n' + 
  			 'digitalWrite(' + sub_pin + ', LOW);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_motor_turnright'] = function(block) {
  var main_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(1) || '6';
  var sub_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(0) || '5';

  Blockly.Arduino.reservePin(
      block, main_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + main_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + main_pin, pinSetupCode, false);

  Blockly.Arduino.reservePin(
      block, sub_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + sub_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + sub_pin, pinSetupCode, false);

  var code = 'digitalWrite(' + main_pin + ', HIGH);\n' + 
  			 'digitalWrite(' + sub_pin + ', LOW);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_motorspeed_turnleft'] = function(block) {
  var main_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(0) || '5';
  var sub_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(1) || '6';
  var pwm = Blockly.Arduino.valueToCode(
      block, 'PWM', Blockly.Arduino.ORDER_ATOMIC) || 255;
  if (Number.isInteger(Number(pwm)) && Number(pwm) > 255) pwm = 255;
  Blockly.Arduino.reservePin(
      block, main_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + main_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + main_pin, pinSetupCode, false);

  Blockly.Arduino.reservePin(
      block, sub_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + sub_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + sub_pin, pinSetupCode, false);

  var code = 'analogWrite(' + main_pin + ', ' + pwm + ');\n' + 
  			 'digitalWrite(' + sub_pin + ', LOW);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_motorspeed_turnright'] = function(block) {
  var main_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(1) || '6';
  var sub_pin = Blockly.Arduino.valueToCode(
      block, 'MOTOR', Blockly.Arduino.ORDER_ATOMIC).charAt(0) || '5';
  var pwm = Blockly.Arduino.valueToCode(
      block, 'PWM', Blockly.Arduino.ORDER_ATOMIC) || 255;
  if (Number.isInteger(Number(pwm)) && Number(pwm) > 255) pwm = 255;
  Blockly.Arduino.reservePin(
      block, main_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + main_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + main_pin, pinSetupCode, false);

  Blockly.Arduino.reservePin(
      block, sub_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + sub_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + sub_pin, pinSetupCode, false);

  var code = 'analogWrite(' + main_pin + ', ' + pwm + ');\n' + 
  			 'digitalWrite(' + sub_pin + ', LOW);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_ledon'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'LED', Blockly.Arduino.ORDER_ATOMIC) || '5';

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', HIGH);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_ledoff'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'LED', Blockly.Arduino.ORDER_ATOMIC) || '5';

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', LOW);\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['click_ledset'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'LED', Blockly.Arduino.ORDER_ATOMIC) || '5';
  var pwm = Blockly.Arduino.valueToCode(
      block, 'PWM', Blockly.Arduino.ORDER_ATOMIC) || 255;
  if (Number.isInteger(Number(pwm)) && Number(pwm) > 255) pwm = 255;

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analogWrite(' + pin + ', ' + pwm + ');\n';
  return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['click_infrared_sensor'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'SENSOR', Blockly.Arduino.ORDER_ATOMIC) || 'A0';
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analogRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['click_touch_sensor'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(
      block, 'SENSOR', Blockly.Arduino.ORDER_ATOMIC) || 'A0';
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};