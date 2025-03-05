import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  LIGHT_GRAY_BG,
  PRIMARY,
  WHITE,
} from "../../../../util/colors";
import PrimaryButton from "../../../../util/primaryButton";
import Seperator from "../../../../util/seperator";
import { paymentSection1 } from "../helper";
import SettingsItem from "../settingsItem";
import styles from "./style";
const payment = () => {
  const navigation = useNavigation();
  const [prefferedCard, setPrefferedCard] = useState(false);

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function renderCardInputs() {
    return (
      <View style={styles.input_container}>
        <Text style={styles.header}>{"Card Details"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name on card"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="Card number"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="Expiry date (MM/YYYY)"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
      </View>
    );
  }

  function renderAddressInputs() {
    return (
      <View style={styles.input_container}>
        <Text style={styles.header}> {"Billing Address"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Street"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="Street2 (optional)"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="Postcode"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
      </View>
    );
  }

  function getPrefferedCardSwitch() {
    return (
      <Switch
        value={prefferedCard}
        onValueChange={(val) => setPrefferedCard(val)}
        disabled={false}
        activeText={"On"}
        inActiveText={"Off"}
        circleSize={20}
        barHeight={25}
        circleBorderWidth={0}
        backgroundActive={PRIMARY}
        backgroundInactive={GRAY_MEDIUM}
        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
        innerCircleStyle={{
          alignItems: "center",
          justifyContent: "center",
        }} // style for inner animated circle for what you (may) be rendering inside the circle
        outerCircleStyle={{}} // style for outer animated circle
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={2.5} // multipled by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
    );
  }

  function renderSection() {
    return (
      <View style={{ marginBottom: 10 }}>
        {paymentSection1.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={
                item.iconRight ? item.iconRight : getPrefferedCardSwitch()
              }
              title={item.heading}
              containerStyle={{ backgroundColor: WHITE }}
              onClick={onClick}
              clickable={item.clickable}
            />
          </>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      <ScrollView style={{ flex: 1 }}>
        {renderCardInputs()}
        {renderAddressInputs()}
        {renderSection()}
      </ScrollView>
      <View style={{ backgroundColor: PRIMARY }}>
        <PrimaryButton
          label={"Save Card"}
          onClick={() => {}}
          textStyle={{ color: PRIMARY }}
          containerStyle={{
            margin: 40,
            paddingHorizontal: 80,
            paddingVertical: 15,
            backgroundColor: WHITE,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default payment;
