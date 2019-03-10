import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad, ViroText,
} from 'react-viro';

var createReactClass = require('create-react-class');

var ARCarDemo = createReactClass({
  getInitialState() {
    return {
      texture: "white",
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
      cutTextIndex: 0,
      cutText: text.cutText[0],
      poisonTextIndex: 0,
      poisonText: text.poisonText[0],
      collapsedTextIndex: 0,
      collapsedText: text.collapsedText[0],
    }
  },

  render: function() {
    return (
      <ViroARScene>
        <ViroLightingEnvironment source={require('./res/tesla/garage_1k.hdr')}/>
        <ViroARImageMarker target={"poison"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

          <ViroText text={this.state.poisonText}
                    position={[0, 0, 1]}
                    scale={[0.5, 0.5, 0.5]}
                    style={styles.cutTextStyle}
                    onClick={this._onClickPoisonText}
          />

        </ViroARImageMarker>

        <ViroARImageMarker target={"cut"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

          <ViroText text={this.state.cutText}
                    scale={[.5, .5, .5]}
                    position={[0, 0, 1]}
                    style={styles.cutTextStyle}
                    onClick={this._onClickCutText} />

          <Viro3DObject
              scale={[0.1, 0.1, 0.1]}
              position={[0.0, 0.0, 0]}
              source={require('./res/tesla/plaster.obj')}
              resources={[require('./res/tesla/plaster.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scalePlaster", run:this.state.animateCar,}} />

          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7} />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />
        </ViroARImageMarker>

        <ViroARImageMarker target={"collapsed"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

          <ViroText text={this.state.collapsedText}
                    scale={[.5, .5, .5]}
                    position={[0, 0, 1]}
                    style={styles.cutTextStyle}
                    onClick={this._onClickCollapsedText} />

          <Viro3DObject
              position={[1, 0, 1]}
              source={require('./res/tesla/recovery1.obj')}
              resources={[require('./res/tesla/recovery1.mtl')]}
              type="OBJ"
              materials={["white_sphere"]}
              animation={{name:"scaleWoman", run: true, loop: false}}
              onClick={this._onClickChangeWoman}
          />

          <Viro3DObject
              position={[0.5, 0, 0]}
              source={require('./res/tesla/arrow.obj')}
              resources={[require('./res/tesla/arrow.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleArrow", run: true, loop: false}}
          />


          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7}
          />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true}
          />

        </ViroARImageMarker>

        <ViroARImageMarker target={"collapsed"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
              position={[1, 0, 1]}
              source={require('./res/tesla/recovery2.obj')}
              resources={[require('./res/tesla/recovery2.mtl')]}
              type="OBJ"
              materials={["white_sphere"]}
              animation={{name:"scaleWoman", run: true, loop: false}}
              onClick={this._onClickChangeWoman}
          />

          <Viro3DObject
              position={[0.5, 0, 0]}
              source={require('./res/tesla/arrow.obj')}
              resources={[require('./res/tesla/arrow.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleArrow", run: true, loop: false}}
          />


          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7}
          />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true}
          />

        </ViroARImageMarker>

        <ViroARImageMarker target={"collapsed"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
              position={[1, 0, 1]}
              source={require('./res/tesla/recovery3.obj')}
              resources={[require('./res/tesla/recovery3.mtl')]}
              type="OBJ"
              materials={["white_sphere"]}
              animation={{name:"scaleWoman", run: true, loop: false}}
              onClick={this._onClickChangeWoman}
          />

          <Viro3DObject
              position={[0.5, 0, 0]}
              source={require('./res/tesla/arrow.obj')}
              resources={[require('./res/tesla/arrow.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleArrow", run: true, loop: false}}
          />


          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7}
          />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true}
          />

        </ViroARImageMarker>

        <ViroARImageMarker target={"collapsed"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
              position={[1, 0, 1]}
              source={require('./res/tesla/recovery4.obj')}
              resources={[require('./res/tesla/recovery4.mtl')]}
              type="OBJ"
              materials={["white_sphere"]}
              animation={{name:"scaleWoman", run: true, loop: false}}
              onClick={this._onClickChangeWoman}
          />

          <Viro3DObject
              position={[0.5, 0, 0]}
              source={require('./res/tesla/arrow.obj')}
              resources={[require('./res/tesla/arrow.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleArrow", run: true, loop: false}}
          />


          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7}
          />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true}
          />

        </ViroARImageMarker>

        <ViroARImageMarker target={"allergic"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
              position={[0.7, 0.3, 0]}
              source={require('./res/tesla/epipen.obj')}
              resources={[require('./res/tesla/epipen.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleEpipen", run: true, loop: false}} />

          <Viro3DObject
              position={[1, -.5, -0.5]}
              source={require('./res/tesla/recovery1.obj')}
              resources={[require('./res/tesla/recovery1.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleWoman", run: true, loop: false}} />

          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7} />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />

        </ViroARImageMarker>

        <ViroARImageMarker target={"burn"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <Viro3DObject
              scale={[0.1, 0.1, 0.1]}
              position={[0.01, 0.01, -0.05]}
              source={require('./res/tesla/object_car.obj')}
              resources={[require('./res/tesla/object_car.mtl')]}
              type="OBJ"
              materials={this.state.texture}
              animation={{name:"scaleWoman", run: true, loop: false}} />

          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7} />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />

        </ViroARImageMarker>

      </ViroARScene>
    );
  },

  _onAnchorFound() {
    this.setState({
      animateCar: true,
    })
  },

  _onClickCutText() {
    if (this.state.cutTextIndex === 4) {
      this.setState({
        cutTextIndex : 0,
        cutText : text.cutText[0]
      });
    } else {
      this.setState({
        cutTextIndex: this.state.cutTextIndex + 1,
        cutText : text.cutText[this.state.cutTextIndex]
      });
    }
  },

  _onClickPoisonText() {
    if (this.state.poisonTextIndex === 4) {
      this.setState({
        poisonTextIndex : 0,
        poisonText : text.poisonText[0]
      });
    } else {
      this.setState({
        poisonTextIndex: this.state.poisonTextIndex + 1,
        poisonText : text.poisonText[this.state.poisonTextIndex]
      });
    }
  },

  _onClickCollapsedText() {
    if (this.state.collapsedTextIndex === 9) {
      this.setState({
        collapsedTextIndex : 0,
        collapsedText : text.collapsedText[0]
      });
    } else {
      this.setState({
        collapsedTextIndex: this.state.collapsedTextIndex + 1,
        collapsedText : text.collapsedText[this.state.collapsedTextIndex]
      });
    }
  },

});

ViroMaterials.createMaterials({
  white: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  blue: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_blue.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  grey: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_grey.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  red: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_red.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  yellow: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_yellow.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  white_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(231,231,231)",
  },
  blue_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(200,142,31)",
  },
});

ViroARTrackingTargets.createTargets({
  collapsed : {
    source : require('./res/allergic.jpg'),
    orientation : "Up",
    physicalWidth : 0.165
  },
  cut : {
    source : require('./res/cut.jpg'),
    orientation : "Up",
    physicalWidth : 0.05
  },
  burn : {
    source : require('./res/burn.jpg'),
    orientation : "Up",
    physicalWidth : 0.05
  },
  allergic : {
    source : require('./res/haoi.jpg'),
    orientation : "Up",
    physicalWidth : 0.165
  },
  poison : {
    source : require('./res/poison.jpg'),
    orientation : "Up",
    physicalWidth : 0.08
  }

});

ViroAnimations.registerAnimations({
    scaleUp:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 500, easing: "bounce"},
    scaleDown:{properties:{scaleX:0, scaleY:0, scaleZ:0,},
                  duration: 200,},
    scaleArrow:{properties:{scaleX:.04, scaleY:.04, scaleZ:.04,},
                  duration: 500, easing: "bounce"},
    scalePlaster:{properties:{scaleX:.09, scaleY:.09, scaleZ:.09,},
                  duration: 500, easing: "bounce"},
    scaleEpipen:{properties:{scaleX:.01, scaleY:.01, scaleZ:.01,},
                  duration: 500, easing: "bounce"},
    scaleWoman:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 500, easing: "bounce"},
    scaleSphereUp:{properties:{scaleX:.8, scaleY:.8, scaleZ:.8,},
                  duration: 50, easing: "easeineaseout"},
    scaleSphereDown:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 50, easing: "easeineaseout"},
    tapAnimation:[["scaleSphereUp", "scaleSphereDown"],]
});

var styles = StyleSheet.create({
  cutTextStyle: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});

var text = {
  cutText: ["1. WASH and DRY your hands thoroughly.",
    "2. CLEAN the wound under running tap water.",
    "3. PAT the area dry with a clean towel.",
    "4. APPLY a sterile adhesive dressing, such as a plaster."],
  poisonText: ["1. WASH your skin.",
    "2. Do NOT scratch.",
    "3. APPLY calamine or hydrocortisone cream.",
    "4. WASH all clothing."],
  collapsedText: ["1. With the person lying on their back, kneel on the floor at their side.",
    "2. Extend the arm nearest you at a right angle to their body with their palm facing up.",
    "3. Take their other arm and fold it so the back of their hand rests on the cheek closest to you, and hold it in place.",
    "4. Use your free hand to bend the person's knee farthest from you to a right angle.",
    "5. Carefully roll the person onto their side by pulling on the bent knee.",
    "6. Their bent arm should be supporting the head, and their extended arm will stop you rolling them too far.",
    "7. Make sure their bent leg is at a right angle.",
    "8. Open their airway by gently tilting their head back and lifting their chin, and check that nothing is blocking their airway.",
    "9. Stay with the person and monitor their condition until help arrives."],

};

module.exports = ARCarDemo;
