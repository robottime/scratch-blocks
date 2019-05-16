'use strict';

goog.provide('Blockly.Blocks.robottime');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['click_motor_menu'] = {
  /**
   * motor drop-down menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MOTOR",
          "options": [
            ['left', '_motor1_'],
            ['right', '_motor2_']
          ]
        }
      ],
      "colour": Blockly.Colours.motion.secondary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['click_motor_turnleft'] = {
  /**
   * Block to motor turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "motor %1 turn %2",
      "args0": [
      	{
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
          "width": 24,
          "height": 24
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_motor_turnright'] = {
  /**
   * Block to motor turn right.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "motor %1 turn %2",
      "args0": [
      	{
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
          "width": 24,
          "height": 24
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_pwm'] = {
  /**
   * pwm drop-down menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "PWM",
          "value": 255,
          "min": 0,
          "max": 255,
          "precision": 1
        }
      ],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['click_motorspeed_turnleft'] = {
  /**
   * Block to motor turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "motor %1 turn %2 at speed %3",
      "args0": [
      	{
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "PWM"
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_motorspeed_turnright'] = {
  /**
   * Block to motor turn right.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "motor %1 turn %2 at speed %3",
      "args0": [
      	{
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "PWM"
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_led_menu'] = {
  /**
   * led drop-down menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LED",
          "options": [
            ['1', '_led1_'],
            ['2', '_led2_'],
            ['3', '_led3_'],
            ['4', '_led4_']
          ]
        }
      ],
      "colour": Blockly.Colours.pen.secondary,
      "colourSecondary": Blockly.Colours.pen.secondary,
      "colourTertiary": Blockly.Colours.pen.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['click_ledon'] = {
  /**
   * Block to led on.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "led %1 on",
      "args0": [
      	{
          "type": "input_value",
          "name": "LED"
        }
      ],
      "category": Blockly.Categories.pen,
      "extensions": ["colours_pen", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_ledoff'] = {
  /**
   * Block to led off.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "led %1 off",
      "args0": [
      	{
          "type": "input_value",
          "name": "LED"
        }
      ],
      "category": Blockly.Categories.pen,
      "extensions": ["colours_pen", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_ledset'] = {
  /**
   * Block to led set pwm.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "led %1 set light %2",
      "args0": [
      	{
          "type": "input_value",
          "name": "LED"
        },
        {
          "type": "input_value",
          "name": "PWM"
        }
      ],
      "category": Blockly.Categories.pen,
      "extensions": ["colours_pen", "shape_statement"]
    });
  }
};

Blockly.Blocks['click_sensor_menu'] = {
  /**
   * sensor drop-down menu
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SENSOR",
          "options": [
            ['left', '_sensor1_'],
            ['right', '_sensor2_']
          ]
        }
      ],
      "colour": Blockly.Colours.sensing.secondary,
      "colourSecondary": Blockly.Colours.sensing.secondary,
      "colourTertiary": Blockly.Colours.sensing.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['click_touch_sensor'] = {
  /**
   * Block to Report if touch sensor touched.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "touch sensor %1 touched?",
      "args0": [
        {
          "type": "input_value",
          "name": "SENSOR"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['click_infrared_sensor'] = {
  /**
   * Block to report mouse's x position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "infrared sensor %1 value",
      "args0": [
        {
          "type": "input_value",
          "name": "SENSOR"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};