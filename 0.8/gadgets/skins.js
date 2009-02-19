/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview This library provides functions for getting skin information.
 */

/**
 * @static
 * @class Provides operations for getting display information about the
 *     currently shown skin.
 * @name gadgets.skins
 */
gadgets.skins = gadgets.skins || {};

/**
 * Fetches the display property mapped to the given key.
 *
 * @param {String} propertyKey The key to get data for;
 *    keys are defined in <a href="gadgets.skins.Property.html"><code>
 *    gadgets.skins.Property</code></a>
 * @return {String} The data
 *
 * @member gadgets.skins
 */
gadgets.skins.getProperty = function(propertyKey) {};

/**
 * @static
 * @class
 * All of the display values that can be fetched and used in the gadgets UI.
 * These are the supported keys for the
 * <a href="gadgets.skins.html#getProperty">gadgets.skins.getProperty()</a>
 * method.
 * @name gadgets.skins.Property
 */
gadgets.skins.Property = {
  /**
   * An image to use in the background of the gadget.
   * This field may be used interchangeably with the string 'BG_IMAGE'.
   * @member gadgets.skins.Property
   */
  BG_IMAGE : 'BG_IMAGE',

  /**
   * The color of the background of the gadget.
   * This field may be used interchangeably with the string 'BG_COLOR'.
   * @member gadgets.skins.Property
   */
  BG_COLOR : 'BG_COLOR',

  /**
   * The color in which the main font should be rendered.
   * This field may be used interchangeably with the string 'FONT_COLOR'.
   * @member gadgets.skins.Property
   */
  FONT_COLOR : 'FONT_COLOR',

  /**
   * The color that anchor tags should use.
   * This field may be used interchangeably with the string 'ANCHOR_COLOR'.
   * @member gadgets.skins.Property
   */
  ANCHOR_COLOR : 'ANCHOR_COLOR'
};